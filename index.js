const done = false;

const simplePromise = new Promise((resolve, reject) => {
  if (done) {
    const successMessage = 'berhasil berhasil hore';
    resolve(successMessage);
  } else {
    const failMessage = 'gagal';
    reject(failMessage);
  }
});

simplePromise.then((ok) => console.log(ok)).catch((fail) => console.log(fail));
