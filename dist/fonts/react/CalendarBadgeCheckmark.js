import React from 'react';
export const CalendarBadgeCheckmark = props => (
  <svg viewBox="0 0 20 20"  {...props} className={`my-icons ${props.className ? props.className : ''}`}><path d="M3.85219 19.3322C2.90146 19.3322 2.1869 19.1015 1.70851 18.6402C1.23617 18.1848 1 17.4988 1 16.5821V5.75012C1 4.83342 1.23617 4.14736 1.70851 3.69197C2.1869 3.23066 2.90146 3 3.85219 3H16.2601C17.2108 3 17.9224 3.23066 18.3947 3.69197C18.8671 4.14736 19.1032 4.83342 19.1032 5.75012V10.8157C18.9882 10.7979 18.8701 10.7861 18.749 10.7802C18.6279 10.7743 18.5067 10.7713 18.3856 10.7713C18.2645 10.7713 18.1434 10.7772 18.0223 10.7891C17.9012 10.795 17.774 10.8038 17.6408 10.8157V8.29621C17.6408 7.88812 17.5318 7.58058 17.3138 7.37358C17.0958 7.16067 16.7839 7.05421 16.3782 7.05421H3.71594C3.31627 7.05421 3.00743 7.16067 2.78943 7.37358C2.57143 7.58058 2.46243 7.88812 2.46243 8.29621V16.6619C2.46243 17.07 2.57143 17.3775 2.78943 17.5845C3.00743 17.7974 3.31627 17.9039 3.71594 17.9039H12.7176C12.7781 18.1582 12.8569 18.4036 12.9538 18.6402C13.0567 18.8827 13.1748 19.1134 13.308 19.3322H3.85219ZM8.2758 10.239C8.11836 10.239 8.00633 10.2124 7.93972 10.1592C7.87916 10.1 7.84889 9.99359 7.84889 9.83982V9.31641C7.84889 9.16264 7.87916 9.05619 7.93972 8.99704C8.00633 8.9379 8.11836 8.90833 8.2758 8.90833H8.81173C8.96917 8.90833 9.07817 8.9379 9.13873 8.99704C9.20534 9.05619 9.23865 9.16264 9.23865 9.31641V9.83982C9.23865 9.99359 9.20534 10.1 9.13873 10.1592C9.07817 10.2124 8.96917 10.239 8.81173 10.239H8.2758ZM11.3006 10.239C11.1371 10.239 11.025 10.2124 10.9645 10.1592C10.9039 10.1 10.8737 9.99359 10.8737 9.83982V9.31641C10.8737 9.16264 10.9039 9.05619 10.9645 8.99704C11.025 8.9379 11.1371 8.90833 11.3006 8.90833H11.8274C11.9909 8.90833 12.1029 8.9379 12.1635 8.99704C12.2241 9.05619 12.2543 9.16264 12.2543 9.31641V9.83982C12.2543 9.99359 12.2241 10.1 12.1635 10.1592C12.1029 10.2124 11.9909 10.239 11.8274 10.239H11.3006ZM14.3163 10.239C14.1528 10.239 14.0407 10.2124 13.9802 10.1592C13.9196 10.1 13.8893 9.99359 13.8893 9.83982V9.31641C13.8893 9.16264 13.9196 9.05619 13.9802 8.99704C14.0407 8.9379 14.1528 8.90833 14.3163 8.90833H14.8522C15.0096 8.90833 15.1186 8.9379 15.1792 8.99704C15.2397 9.05619 15.27 9.16264 15.27 9.31641V9.83982C15.27 9.99359 15.2397 10.1 15.1792 10.1592C15.1186 10.2124 15.0096 10.239 14.8522 10.239H14.3163ZM5.26012 13.14C5.09661 13.14 4.98459 13.1134 4.92403 13.0601C4.86347 13.001 4.8332 12.8945 4.8332 12.7408V12.2173C4.8332 12.0636 4.86347 11.9601 4.92403 11.9069C4.98459 11.8477 5.09661 11.8181 5.26012 11.8181H5.79604C5.95348 11.8181 6.06248 11.8477 6.12304 11.9069C6.18359 11.9601 6.21387 12.0636 6.21387 12.2173V12.7408C6.21387 12.8945 6.18359 13.001 6.12304 13.0601C6.06248 13.1134 5.95348 13.14 5.79604 13.14H5.26012ZM8.2758 13.14C8.11836 13.14 8.00633 13.1134 7.93972 13.0601C7.87916 13.001 7.84889 12.8945 7.84889 12.7408V12.2173C7.84889 12.0636 7.87916 11.9601 7.93972 11.9069C8.00633 11.8477 8.11836 11.8181 8.2758 11.8181H8.81173C8.96917 11.8181 9.07817 11.8477 9.13873 11.9069C9.20534 11.9601 9.23865 12.0636 9.23865 12.2173V12.7408C9.23865 12.8945 9.20534 13.001 9.13873 13.0601C9.07817 13.1134 8.96917 13.14 8.81173 13.14H8.2758ZM11.3006 13.14C11.1371 13.14 11.025 13.1134 10.9645 13.0601C10.9039 13.001 10.8737 12.8945 10.8737 12.7408V12.2173C10.8737 12.0636 10.9039 11.9601 10.9645 11.9069C11.025 11.8477 11.1371 11.8181 11.3006 11.8181H11.8274C11.9909 11.8181 12.1029 11.8477 12.1635 11.9069C12.2241 11.9601 12.2543 12.0636 12.2543 12.2173V12.7408C12.2543 12.8945 12.2241 13.001 12.1635 13.0601C12.1029 13.1134 11.9909 13.14 11.8274 13.14H11.3006ZM5.26012 16.0498C5.09661 16.0498 4.98459 16.0202 4.92403 15.9611C4.86347 15.9019 4.8332 15.7955 4.8332 15.6417V15.1183C4.8332 14.9645 4.86347 14.861 4.92403 14.8078C4.98459 14.7486 5.09661 14.7191 5.26012 14.7191H5.79604C5.95348 14.7191 6.06248 14.7486 6.12304 14.8078C6.18359 14.861 6.21387 14.9645 6.21387 15.1183V15.6417C6.21387 15.7955 6.18359 15.9019 6.12304 15.9611C6.06248 16.0202 5.95348 16.0498 5.79604 16.0498H5.26012ZM8.2758 16.0498C8.11836 16.0498 8.00633 16.0202 7.93972 15.9611C7.87916 15.9019 7.84889 15.7955 7.84889 15.6417V15.1183C7.84889 14.9645 7.87916 14.861 7.93972 14.8078C8.00633 14.7486 8.11836 14.7191 8.2758 14.7191H8.81173C8.96917 14.7191 9.07817 14.7486 9.13873 14.8078C9.20534 14.861 9.23865 14.9645 9.23865 15.1183V15.6417C9.23865 15.7955 9.20534 15.9019 9.13873 15.9611C9.07817 16.0202 8.96917 16.0498 8.81173 16.0498H8.2758ZM11.3006 16.0498C11.1371 16.0498 11.025 16.0202 10.9645 15.9611C10.9039 15.9019 10.8737 15.7955 10.8737 15.6417V15.1183C10.8737 14.9645 10.9039 14.861 10.9645 14.8078C11.025 14.7486 11.1371 14.7191 11.3006 14.7191H11.8274C11.9909 14.7191 12.1029 14.7486 12.1635 14.8078C12.2241 14.861 12.2543 14.9645 12.2543 15.1183V15.6417C12.2543 15.7955 12.2241 15.9019 12.1635 15.9611C12.1029 16.0202 11.9909 16.0498 11.8274 16.0498H11.3006ZM18.3856 21C17.7558 21 17.1624 20.8817 16.6053 20.6451C16.0482 20.4145 15.5577 20.0922 15.1338 19.6782C14.7099 19.2642 14.3768 18.7851 14.1346 18.241C13.8924 17.6969 13.7713 17.1143 13.7713 16.4933C13.7713 15.8724 13.8924 15.2928 14.1346 14.7546C14.3768 14.2104 14.7099 13.7314 15.1338 13.3174C15.5577 12.8975 16.0482 12.5722 16.6053 12.3415C17.1624 12.105 17.7558 11.9867 18.3856 11.9867C19.0215 11.9867 19.6179 12.105 20.1751 12.3415C20.7322 12.5722 21.2227 12.8945 21.6466 13.3085C22.0705 13.7225 22.4005 14.2016 22.6367 14.7457C22.8789 15.2898 23 15.8724 23 16.4933C23 17.1084 22.8789 17.688 22.6367 18.2321C22.3944 18.7762 22.0584 19.2553 21.6284 19.6693C21.2045 20.0833 20.714 20.4086 20.1569 20.6451C19.5998 20.8817 19.0094 21 18.3856 21ZM17.8315 18.9241C18.0435 18.9241 18.2009 18.8531 18.3039 18.7112L20.9472 15.136C20.9895 15.0769 21.0198 15.0177 21.038 14.9586C21.0622 14.8995 21.0743 14.8462 21.0743 14.7989C21.0743 14.6392 21.0168 14.5091 20.9017 14.4086C20.7867 14.3021 20.6535 14.2489 20.5021 14.2489C20.3022 14.2489 20.1418 14.3317 20.0206 14.4973L17.8043 17.4958L16.687 16.3159C16.6386 16.2627 16.578 16.2183 16.5054 16.1828C16.4327 16.1474 16.3479 16.1296 16.251 16.1296C16.0936 16.1296 15.9604 16.1828 15.8514 16.2893C15.7424 16.3958 15.6879 16.5288 15.6879 16.6885C15.6879 16.7477 15.7 16.8157 15.7242 16.8926C15.7484 16.9635 15.7848 17.0286 15.8332 17.0877L17.3774 18.7289C17.4319 18.794 17.5015 18.8413 17.5863 18.8709C17.6711 18.9064 17.7528 18.9241 17.8315 18.9241Z" fillRule="evenodd" /></svg>
);
