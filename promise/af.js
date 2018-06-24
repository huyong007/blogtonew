function getName(callback) {
    setTimeout(() => {
        callback('wang xia');
    }, 100);
}
function getBirthday(name, callback) {
    setTimeout(() => {
        if (name && name.includes('wang xia')) {
            callback(name + ' .芳龄18')
        } else {
            callback('鬼知道是谁')
        }
    }, 100);
}

getName(function (name) {
    getBirthday(name, function (message) {
        console.log(message);

    });
});


//promise改造callback
function getName() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('wang xia')
        }, 100)
    });
}

function getBirthday(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (name && name.includes('wang xia')) {
                resolve(name + " .芳龄18")
            } else {
                reject('鬼知道是谁')
            }

        }, 100);
    });
}

getName().then(function (name) {
    getBirthday(name).then(function (message) {
        console.log(message);

    });
})
//async await 再优化解决嵌套问题
function getName() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('wang xia');
        }, 100);
    });
}
async function getBirthday(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (name && name.includes('wang xia')) {
                resolve(name + ' .芳龄18')
            } else {
                reject('鬼知道是谁');
            }
        }, 100);
    });
}
async function output() {
    var name = await getName();
    var message = await getBirthday(name);
    console.log(message);

}
output();
//try catch 捉住错误
function getName() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('wang xia')
        }, 100);
    });
}

async function getBirthday(name) {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            if(name&&name.includes('wang xia')){
                resolve(name+' .芳龄18')
            }else{
                reject('鬼知道是谁')
            }
        }, 100);
    });
    
}

async function output() {
    try{
var name=await getName();
var message=await getBirthday(name);
console.log(message);

    }catch(err){
        console.log(err);
        
    }
}
//getName函数拿到name之后可以再进行判断和处理
function getName(){
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('wang xia');
        }, 100);
    });
}

async function getBirthday(name) {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            if(name&&name.includes('wang xia')){
                resolve(name+' .芳龄18')
            }else{
                reject('鬼知道是谁')
            }
        }, 100);
    });
}

async function output(){
    try{
        var name=await getName()
        .then(function (name) {
            if(typeof name!=='string'){
                throw new Error('not string');
            }else{
                return name;
            }
        })
        .then(function (name) {
            return name+ '同学';
        });
        var message= await getBirthday(name);
        console.log(message);
        
    }catch(err){
        console.log(err  );
        
    }
}