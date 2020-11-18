/*
 * @Author: zx
 * @Description: 
 */
var webName = "long";
function wrap() {
    var webName1 = "short";
    function wrap1() {
        let func = () => {
            console.log(this.webName1);
        }
        func();
    }

    wrap1();//long
}
wrap();//long