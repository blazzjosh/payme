import { redirect, type Actions } from "@sveltejs/kit";


export const actions: Actions = {
    setTheme: async ({url, cookies}) => {
        const theme  = url.searchParams.get('theme');
        const redirectTo = url.searchParams.get('redirectTo')

        
        if(theme) {
            cookies.set("colortheme", theme, { 
                path: "/",
                maxAge: 60 * 60 * 24 * 365, //a year
            })
        }

        throw redirect(303, redirectTo ?? '/')

    },
};