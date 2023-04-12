import { gql } from '@apollo/client';


export const QUERY_ME = gql`
        query me {
            me {
                _id
                cars {
                _id
                }
                email
                location
                password
                username
            }
        }
`;

// export const QUERY_POSTS = gql`
//     query posts {

//     }
// `;
// export const QUERY_PROFILES = gql`
//     query allProfiles {
//         profiles {
//             _id
//             name
//             # More?
//         }
//     }
// `;

// export const QUERY_SINGLE_PROFILE = gql`
//     query singleProfile($profileId: ID!)
// `