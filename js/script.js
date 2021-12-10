const app = new Vue({
  el: "#root",
  data: {
    emails: [],
  },
  created() {
    for (let x = 0; x < 10; x++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((resp) => {
          // this.emails[x] = resp.data.response; //PERCHE' NON FUNZIONA?
          this.emails.push(resp.data.response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
});