axios.get('/api/user?name=xugaoyang')
    .then(response => response.data)
    .catch(error)

axios.get('api/topics?user_id=' + userInfo._id)
    .then(response => response.data)
    .catch(error)



async function getNameData(name) {
    try {
        let firstData = await axios.get('/api/user?name=' + name)
        let secondeData = firstData.data;

        let thirdData = await axios.get
            (
            'api/topics?user_id=' + secondeData
            );
        let data = thirdData.data;
        //i got it
    } catch (error) {
        console.log(error);

    }


}
function getData() {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, content) {
            if (err) {
                reject(err);
                return;
            } else {
                resolve(content);
            }


        })
    })
};
/*这次复习写错1，结构大致知道，promise的内置函数搞错了，2，fs读取
文件的函数式参数里面包含的callback，callback才是错误优先，而promise
就是改造的错误处理；3，两个promise如果结果依赖的话，可以使用try 
catch和await async来改造promise函数，这时候的依赖是调取是需要调取
两个promise函数，而不是参数之间的依赖*/