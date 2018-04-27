import convert from "./converter";

const VueZawUni = {
  install(Vue) {
    Vue.filter("zawuni", function(str, type) {
      return convert(str, type);
    });
  }
};

export default VueZawUni;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueZawUni);
}
