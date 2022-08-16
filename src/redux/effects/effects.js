import {
    setNavbar,
} from '../actions/actions'


// export const getNavbarDataEffect = () => {
//     return async (dispatch, getState, services) => {
//         try {
//             const res = await services.getNavbarData()
//             if (res?.data.length) {
//                 dispatch(setNavbar(res?.data))
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     }
// }