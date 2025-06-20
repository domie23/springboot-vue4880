const base = {
    get() {
        return {
            url : "http://localhost:8080/gongyingshang/",
            name: "gongyingshang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gongyingshang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "供应商管理系统"
        } 
    }
}
export default base
