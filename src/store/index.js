import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : '',
    userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : ''
  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      state.userName = user.userName;
      state.userId = user.userId;
      localStorage.setItem('Authorization', user.Authorization);
      localStorage.setItem('userName', user.userName);
      localStorage.setItem('userId', user.userId);
    },
    // 注销用户时删除token
    logout(state, user){
      state.Authorization = '';
      state.userName = '';
      state.userId = '';
      localStorage.setItem('Authorization', '');
      localStorage.setItem('userName', '');
      localStorage.setItem('userId', '');
    }
  },
  getters: {
   /* userName:   state => {
      return state.userName;
    },
    Authorization: state => {
      return state.Authorization;
    }*/
  }
});

export default store;
