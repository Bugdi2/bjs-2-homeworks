//Задача № 1
function cachingDecoratorNew(func) {
    let cache ={};
    return (...args) => {
        const hash = args.join(",");
        if (hash in cache){
            console.log("Из кеша: " + cache[hash]);
            return ("Из кеша: " + cache[hash]);
        }

    const result = 0;
    if (cache[hash].length <= 5){
        result = func(...args);
        cache[hash] = result;
        return ("Вычисляем: " + result);
    }

    console.log("Кеш переполнен!");
    return;


    }
  
}


    //let cache = {};
    //const hash = func;
    //if (hash in cache){
    //    console.log("Из кеша: " + cache[hash]);
    //    return ("Из кеша: " + cache);
    //}   
    //if (cache[hash].length > 5){
    //    console.log("Кеш переполнен!!! Будет выполненена отчистка");
    //    return (cache = {})
    //}
    //cache[hash] = func;
    //return ("Вычисляем: " + func);

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}








































