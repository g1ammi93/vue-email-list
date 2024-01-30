const { createApp } = Vue;

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

const app = createApp({
    data: () => ({
        emails: []
    }),
    created() {
        for (let i = 1; i <= 10; i++)
            axios.get(endpoint).then(res => {
                this.emails.push(res.data.response)
            })
    }
});

app.mount('#root')

