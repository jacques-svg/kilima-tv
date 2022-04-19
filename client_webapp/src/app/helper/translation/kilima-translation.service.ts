import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take, takeUntil } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import Utils from '../../util'


@Injectable({
  providedIn: 'root'
})
export class KilimaTranslationService implements OnDestroy {
  onDestroyNotifier = new EventEmitter();

  englishTranslationSource!: JSON;
  translationSource!: JSON;

  translationReadyNotifier = new BehaviorSubject<boolean>(false);
  availableLanguagesChangeNotifier = new EventEmitter<boolean>();
  languageChangeNotifier = new EventEmitter<string>();

  private readonly supportedLanguages: string[] = [
    'en',
    'fr',
  ];
  private availableLanguages: string[] = [
    'en',
    'fr'
  ];
  constructor(private translateService: TranslateService) {
    this.setup()
    this.setAvailableLanguages(Utils.getAvailableLanguages());
    this.translateService.getTranslation('en')
    .pipe(take(1))
    .subscribe(res => {
      this.englishTranslationSource = res;
    });

  this.translateService.onLangChange
    .pipe(takeUntil(this.onDestroyNotifier))
    .subscribe(() => {
      this.translateService.getTranslation(this.translateService.currentLang)
        .pipe(take(1))
        .subscribe(res => {
          this.translationSource = res;
          // Alert translations ready the first time translations are loaded
          // then translations change for subsequent changes
          if (!this.translationReadyNotifier.getValue()) {
            this.translationReadyNotifier.next(true);
          } else {
            this.languageChangeNotifier.emit(this.translateService.currentLang);
          }
        });
    });

  }

  ngOnDestroy() {
    this.onDestroyNotifier.emit();
    this.onDestroyNotifier.unsubscribe();
  }
/*   private translateSingleKey(id: string, params: {} = {}, useEnglish = false, warn = true) {
    let translations: {} = this.translationSource;
    if (useEnglish) {
      translations = this.englishTranslationSource;
    }
    // Variable type is "any" to prevent compiler error about replaceAll not existing on string
    let translation: any = '';
    let path = [];
    if (id) {
      const idCopy = Utils.deepCopy(id);
      path = idCopy.split('.');
    }

    if (path && path.length > 0) {
      if (translations) {
        const length = path.length;
        for (let i = 0; i < length; i++) {
          if (!translations[path[i]]) {
            if (!useEnglish) {
              if (warn) {
                console.log('no target translation at path: ' + id);
              }
              return this.get(id, params, true);
            } else {
              if (warn) {
                console.log('no english word or phrase found at path: ' + id);
              }
              return id;
            }
          }
          translations = translations[path[i]];
          if (i + 1 >= length) {
            if (!translations) {
              return path[i];
            }
            translation = translations + '';
          }
        }
        for (const param of Object.keys(params)) {
          let toReplace: string;
          if (param.includes('%')) {
            // fprintf syntax
            toReplace = param;
          } else {
            toReplace = '{{' + param + '}}';
          }

          if (params[param] instanceof Array) {
            // replace occurances sequentially
            for (const replacement of params[param]) {
              translation = translation.replace(toReplace, replacement);
            }
          } else {
            // replace all occurances of key
            translation = translation.replaceAll(toReplace, params[param]);
          }
        }
      }
    }
    return translation;
  }
 */
  /* get(id: string | string[], params: {} = {}, useEnglish = false, warn = true) {
    if (!id) {
      return '';
    }

    if (Array.isArray(id)) {
      return this.processNameElements(id);
    }

    // Testing mode active, return raw translation id
    if (Utils.getLanguage() === 'yi') {
      return id;
    }

    // Extract and translate strings containing multiple translation ids or embedded ids
    // Only ids that contain the pattern "<WORD_1>.<WORD_2>.<WORD_N>" will be translated
    // -------------------------------------------------------------
    // --- WORD may be alphanumeric and only contain underscores ---
    // -------------------------------------------------------------
    // E.g. "MATERIALS.MIXED.75%_MANURE_12-5%_COLA" will only match "MATERIALS.MIXED.75"
    // E.g. "RESULTS.DATA.DIGESTER.NAME RESULTS.DATA.DIGESTER.INPUT" will translate both ids
    // E.g. "Product name RESULTS.DATA.TONNE_UNIT" will translate only the translation id
    // Regex explanation: https://regex101.com/r/XV4BOS/1
    const extractedStrings = id.match(/(\w+(\.\w+)+)/g) || [];
    if (extractedStrings && extractedStrings.length > 0) {
      let translated = id;
      extractedStrings.forEach(translationId => {
        // Ignore numbers
        if (!isNaN(Number(translationId))) {
          return;
        }
        translated = translated.replace(translationId, this.translateSingleKey(translationId, params, useEnglish, warn));
      });
      return translated;
    }
    return id;
  } */

  private setup() {
    // Language priority: user selected -> browser -> english
    let language = 'en';
    this.translateService.setDefaultLang('en');
    const browserLanguage = navigator.language.substr(0, 2);
    if (this.availableLanguages.includes(browserLanguage)) {
      // take the language substring from the browser if it is in the list of supported languages
      language = browserLanguage;
    }
    const userSelectedLanguage = Utils.getLanguage();
    if (userSelectedLanguage !== 'en') {
      // take the language from local storage if set
      language = userSelectedLanguage;
    }
    this.changeLanguage(language);
  }

  getCurrentLang() {
    return this.translateService.currentLang;
  }

  getAvailableLanguages() {
    return this.availableLanguages;
  }

  setAvailableLanguages(languages: string[]) {
    this.availableLanguages = this.supportedLanguages.filter(lang => languages.includes(lang));
    // Default back to english if unavailable language selected
    if (!this.availableLanguages.includes(this.getCurrentLang())) {
      console.log('unavailable language selected, changing to english');
      this.changeLanguage('en');
    }
    this.availableLanguagesChangeNotifier.emit();
  }

  changeLanguage(language: string) {
    this.translateService.use(language);
    Utils.setLanguage(language);
  }

/*   private processNameElements(nameElements: string[]) {
    let translation = '';
    if (nameElements && nameElements.length > 0) {
      for (const element of nameElements) {
        let translatedElement = element;
        if (element.includes('.')) {
          translatedElement = this.get(element);
        }
        if (translation === '') {
          translation = translatedElement;
          continue;
        }
        translation += ', ' + translatedElement;
      }
    }
    return translation;
  } */

}
