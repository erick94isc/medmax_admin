export default async function ({ app }) {
    if (!app.$auth.loggedIn) {
        return
    }
const auth = app.$auth;
const authStrategy = auth.strategy.name;

try {
            const {data} = await app.$axios.$post(url, null);
            console.log(data)
            auth.setToken('local', "Bearer "+ data.token);
            setTimeout( async () => {
                auth.setStrategy('local');
                setTimeout( async () => {
                    await auth.fetchUser();
                })
            });
        } catch (e) {
            console.log(e);
        }
    }
