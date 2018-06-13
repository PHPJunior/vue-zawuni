import convert from "./converter";

const install = function(Vue) {
  Vue.filter("zawuni", function(str, type) {
    return convert(str, type);
  });
};

const VueZawUni = { install };

export { install };
export default VueZawUni;
