export default class Utils {

    static prepURL(url: string, baseHref: string) {
      if (baseHref === '/') {
        return url;
      } else {
        return baseHref + url;
      }
    }
    static getAvailableLanguages() {
/*         if (localStorage.getItem('availableLanguages')) {
          return localStorage.getItem('availableLanguages').split(',');
        }
 */        return ['en'];
    }
    static setLanguage(language: string) {
        localStorage.setItem('language', String(language));
    }
    static getLanguage() {
        // Default to English if not set
        return localStorage.getItem('language') || 'en';
    }

/*     static deepCopy(obj) {
        let copy;
    
        // Handle the 3 simple types, and null or undefined
        if (null == obj || 'object' !== typeof obj) {
          return obj;
        }
    
        // Handle Date
        if (obj instanceof Date) {
          copy = new Date();
          copy.setTime(obj.getTime());
          return copy;
        }
    
        // Handle Array
        if (obj instanceof Array) {
          copy = [];
          for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = this.deepCopy(obj[i]);
          }
          return copy;
        }
    
        // Handle Object
        if (obj instanceof Object) {
          copy = {};
          for (const attr in obj) {
            if (obj.hasOwnProperty(attr)) {
              copy[attr] = this.deepCopy(obj[attr]);
            }
          }
          return copy;
        }
    
        throw new Error('unable to copy obj! Its type isn\'t supported.');
      }
 */    
}