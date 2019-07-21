import Mock from 'mockjs';
import Data from  './dataRepository'

/*Mock.mock(/api\/checkLogin, Data.login);*/
Mock.mock('/checkLogin', 'get', require('./json/user'))

export default Mock;
