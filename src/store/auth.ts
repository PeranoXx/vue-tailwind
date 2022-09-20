export const Auth = {
    namespace: true,
    state: () => ({
        auth: {
            isAuth: false,
            token: "",
            id: "",
            email: "",
            name: "",
            phone_no: "",
            emailVerified: false,
            avatar: "",
            profileUpdated: false,
        },
    }),

    actions: {
        // nextSong( { commit, state } ){
        //     let nextIndex = state.activeIndex + 1;
        //     commit( 'setActiveIndex', nextIndex );
        //     commit( 'setActiveSong', state.songs[ nextIndex ] );
        // }
    },

    getters: {
        isAuth(state: any) {
            return state.auth.isAuth;
        },
        token(state: any) {
            return state.auth.token;
        },
        id(state: any) {
            return state.auth.id;
        },
        email(state: any) {
            return state.auth.email;
        },
        name(state: any) {
            return state.auth.name;
        },
        phone_no(state: any) {
            return state.auth.phone_no;
        },
        emailVerified(state: any) {
            return state.auth.emailVerified;
        },
        avatar(state: any) {
            return state.auth.avatar;
        },
        profileUpdated(state: any) {
            return state.auth.profileUpdated;
        },
    },

    mutations: {
        auth(state: any, auth: boolean) {
            state.auth = auth;
        },
        profileUpdated(state: any, status: boolean) {
            state.auth.profileUpdated = status;
        },
        name(state: any, name: string) {
            state.auth.name = name;
        },
        // isAuth(state: any, status: boolean) {
        //     state.auth.isAuth = status;
        // },
        // token(state: any, token: string) {
        //     state.auth.token = token;
        // },
        id(state: any, userId: string) {
            state.auth.id = userId;
        },
        // email(state: any, email: string) {
        //     state.auth.email = email;
        // },

        emailVerified(state: any, status: boolean) {
            state.auth.emailVerified = status;
        },
        // avatar(state: any, avatar: string) {
        //     state.auth.avatar = avatar;
        // },
    },
};
