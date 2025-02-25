function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    //oque diz se ela é uma promessa
    if (typeof msg !== "string") {
      reject(false);
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase());
    }, tempo);
  });
}
