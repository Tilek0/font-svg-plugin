import React from 'react';
export const LinePerson2 = props => (
  <svg viewBox="0 0 20 20"  {...props} className={`my-icons ${props.className ? props.className : ''}`}><path d="M11.1406 19.5938C9.86458 19.5938 9.22656 19.1771 9.22656 18.3438C9.22656 17.8333 9.38281 17.2891 9.69531 16.7109C10.0078 16.1328 10.4583 15.5885 11.0469 15.0781C11.6406 14.5625 12.3568 14.1432 13.1953 13.8203C14.0391 13.4974 14.9896 13.3359 16.0469 13.3359C17.1094 13.3359 18.0599 13.4974 18.8984 13.8203C19.7422 14.1432 20.4583 14.5625 21.0469 15.0781C21.6406 15.5885 22.0938 16.1328 22.4062 16.7109C22.7188 17.2891 22.875 17.8333 22.875 18.3438C22.875 19.1771 22.2344 19.5938 20.9531 19.5938H11.1406ZM10.7656 18.4141H21.3281C21.4323 18.4141 21.5052 18.3984 21.5469 18.3672C21.5938 18.3359 21.6172 18.2786 21.6172 18.1953C21.6172 17.8724 21.4948 17.5026 21.25 17.0859C21.0104 16.6693 20.6536 16.2656 20.1797 15.875C19.7057 15.4844 19.1224 15.1615 18.4297 14.9062C17.737 14.6458 16.9427 14.5156 16.0469 14.5156C15.151 14.5156 14.3568 14.6458 13.6641 14.9062C12.9766 15.1615 12.3958 15.4844 11.9219 15.875C11.4479 16.2656 11.0885 16.6693 10.8438 17.0859C10.6042 17.5026 10.4844 17.8724 10.4844 18.1953C10.4844 18.2786 10.5052 18.3359 10.5469 18.3672C10.5938 18.3984 10.6667 18.4141 10.7656 18.4141ZM16.0547 12.3594C15.4349 12.3594 14.8698 12.1953 14.3594 11.8672C13.849 11.5391 13.4401 11.099 13.1328 10.5469C12.8307 9.98958 12.6797 9.3776 12.6797 8.71094C12.6797 8.04948 12.8307 7.44792 13.1328 6.90625C13.4401 6.36458 13.849 5.93229 14.3594 5.60938C14.8698 5.28646 15.4349 5.125 16.0547 5.125C16.6797 5.125 17.2474 5.28385 17.7578 5.60156C18.2682 5.91927 18.6745 6.34896 18.9766 6.89062C19.2786 7.42708 19.4297 8.02865 19.4297 8.69531C19.4297 9.36719 19.276 9.98177 18.9688 10.5391C18.6667 11.0911 18.2604 11.5339 17.75 11.8672C17.2396 12.1953 16.6745 12.3594 16.0547 12.3594ZM16.0547 11.1797C16.4401 11.1797 16.7917 11.0703 17.1094 10.8516C17.4323 10.6276 17.6901 10.3281 17.8828 9.95312C18.0755 9.57292 18.1719 9.15365 18.1719 8.69531C18.1719 8.24219 18.0755 7.83594 17.8828 7.47656C17.6953 7.11198 17.4401 6.82552 17.1172 6.61719C16.7995 6.40885 16.4453 6.30469 16.0547 6.30469C15.6693 6.30469 15.3151 6.41146 14.9922 6.625C14.6745 6.83333 14.4193 7.11979 14.2266 7.48438C14.0339 7.84896 13.9375 8.25781 13.9375 8.71094C13.9375 9.16927 14.0339 9.58594 14.2266 9.96094C14.4245 10.3359 14.6823 10.6328 15 10.8516C15.3229 11.0703 15.6745 11.1797 16.0547 11.1797ZM2.70312 19.5938C2.17708 19.5938 1.78125 19.4844 1.51562 19.2656C1.25 19.0521 1.11719 18.7266 1.11719 18.2891C1.11719 17.6432 1.27083 17.0234 1.57812 16.4297C1.88542 15.8307 2.3099 15.2995 2.85156 14.8359C3.39844 14.3672 4.02865 13.9974 4.74219 13.7266C5.46094 13.4557 6.22917 13.3203 7.04688 13.3203C7.47917 13.3203 7.89844 13.3594 8.30469 13.4375C8.71094 13.5104 9.10156 13.6224 9.47656 13.7734C9.85677 13.9193 10.2161 14.1016 10.5547 14.3203C10.3776 14.4453 10.2161 14.5781 10.0703 14.7188C9.92448 14.8542 9.79167 15 9.67188 15.1562C9.41667 15.0052 9.14844 14.8802 8.86719 14.7812C8.59115 14.6823 8.29948 14.6068 7.99219 14.5547C7.6901 14.5026 7.375 14.4766 7.04688 14.4766C6.40625 14.4766 5.79948 14.5807 5.22656 14.7891C4.65365 14.9922 4.14583 15.2708 3.70312 15.625C3.26042 15.974 2.91146 16.3724 2.65625 16.8203C2.40625 17.2682 2.28125 17.7344 2.28125 18.2188C2.28125 18.2969 2.29948 18.3516 2.33594 18.3828C2.3724 18.4193 2.43229 18.4375 2.51562 18.4375H8.23438C8.20833 18.6771 8.25521 18.9036 8.375 19.1172C8.49479 19.3307 8.64844 19.4896 8.83594 19.5938H2.70312ZM7.05469 12.4297C6.51823 12.4297 6.02865 12.2865 5.58594 12C5.14323 11.7083 4.78906 11.3203 4.52344 10.8359C4.25781 10.3516 4.125 9.8151 4.125 9.22656C4.125 8.64844 4.25781 8.1224 4.52344 7.64844C4.78906 7.16927 5.14323 6.78906 5.58594 6.50781C6.02865 6.22135 6.51823 6.07812 7.05469 6.07812C7.59635 6.07812 8.08854 6.21875 8.53125 6.5C8.97396 6.78125 9.32552 7.15885 9.58594 7.63281C9.85156 8.10677 9.98438 8.63281 9.98438 9.21094C9.98438 9.79948 9.85156 10.3385 9.58594 10.8281C9.32031 11.3177 8.96615 11.7083 8.52344 12C8.08073 12.2865 7.59115 12.4297 7.05469 12.4297ZM7.05469 11.2656C7.3724 11.2656 7.66667 11.1745 7.9375 10.9922C8.20833 10.8047 8.42448 10.5573 8.58594 10.25C8.7474 9.9375 8.82812 9.59115 8.82812 9.21094C8.82812 8.84115 8.7474 8.50781 8.58594 8.21094C8.42969 7.91406 8.21615 7.67969 7.94531 7.50781C7.67969 7.33073 7.38281 7.24219 7.05469 7.24219C6.73177 7.24219 6.4349 7.33073 6.16406 7.50781C5.89844 7.6849 5.6849 7.92448 5.52344 8.22656C5.36719 8.52344 5.28906 8.85677 5.28906 9.22656C5.28906 9.60156 5.36979 9.94531 5.53125 10.2578C5.69271 10.5651 5.90625 10.8099 6.17188 10.9922C6.44271 11.1745 6.73698 11.2656 7.05469 11.2656Z" fillRule="evenodd" /></svg>
);
