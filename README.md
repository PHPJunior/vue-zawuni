# vue-zawuni
Font Converter for Zawgyi and Unicode

## Installation

### NPM
```
npm install --save vue-zawuni
```


### CDN 
```html
<script src="https://cdn.jsdelivr.net/npm/vue-zawuni/dist/vue-zawuni.min.js"></script>
```

When used with a module system :

```js
import Vue from 'vue'
import VueZawUni from 'vue-zawuni'

Vue.use(VueZawUni)
```

## Usage

```
<link rel="stylesheet" href='https://mmwebfonts.comquas.com/fonts/?font=mon3' />
<link rel="stylesheet" href='https://mmwebfonts.comquas.com/fonts/?font=zawgyi' />
<style>
    .unicode {
        font-family: "Pyidaungsu","MON3 Anonta 1" !important;
    }

    .zawgyi {
        font-family: "Zawgyi-One" !important;
    }
</style>
```

#### Zawgyi => Unicode

+ Example:

  ```
  <span class="unicode">{{ zawgyi | zawuni('unicode') }}</span>
  ```


#### Unicode => Zawgyi

+ Example:

  ```
  <span class="zawgyi">{{ unicode | zawuni('zawgyi') }}</span>
  ```
  
## Credits

- [Rabbit Converter](https://github.com/Rabbit-Converter/Rabbit-PHP)
- All Contributors

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.  