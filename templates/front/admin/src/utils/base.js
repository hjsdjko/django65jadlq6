const base = {
    get() {
        return {
            url : "http://localhost:8080/django65jadlq6/",
            name: "django65jadlq6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于spark的短视频推荐系统的设计与实现"
        } 
    }
}
export default base
