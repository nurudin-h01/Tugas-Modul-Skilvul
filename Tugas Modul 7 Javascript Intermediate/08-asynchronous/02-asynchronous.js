const isR18Plus = (age) => {
    let value = age > 18;
    let myPromise = new Promise(function(myResolve, myReject) {
        if (value) {
            myResolve("anda sudah dewasa");
        } else {
            myReject("anda masih dibawah umur");
        }
    });
    return myPromise;

};
const printR18Plus = async() => {
    const underAge = await isR18Plus(10).then(value => value).catch(value => value);
    const properAge = await isR18Plus(19).then(value => value).catch(value => value);

    console.log(underAge);
    console.log(properAge);
}

printR18Plus();
