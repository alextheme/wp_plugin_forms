<template>
    <div class="form_insurance--wrapper" :class="formModClass">

        <!-- Navigations -->
        <nav class="form_nav">
            <ul v-if="form === 'auto' || form === 'home'" class="section_in">
                <li @click="goTab(tab)" class="button" :class="navClass(tab)" v-for="(item, tab) in nav[form]">
                    <icon-ok />
                    <span class="text">{{ item }}</span>
                </li>
            </ul>

            <!-- Progress bar -->
            <div class="form_progress"><span :style="{ width: progress + '%', minWidth: progressDone + '%' }"></span></div>
        </nav>

        <form class="form_questions" v-if="!showDonePage" method="post"><div class="section_in">

            <!-- Header -->
            <header class="form_header">
                <template v-if="form==='renters'">
                    <span class="icon_wrapper">
                        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M77.4968 34.6518L64.7527 21.9077C63.3143 9.4095 52.7568 0 40.1458 0C27.9244 0 17.7428 8.897 15.7372 20.5547C6.94608 21.2448 0 28.618 0 37.5833C0 43.7163 3.27658 49.2615 8.61683 52.2989V57.8715C8.61683 58.3328 8.80475 58.7735 9.13275 59.0947L12.1838 62.0706L9.13617 65.1182C8.46992 65.7845 8.46992 66.8676 9.13617 67.5338L12.1975 70.5952L9.13617 73.6565C8.46992 74.3228 8.46992 75.4058 9.13617 76.0721L13.6359 80.5752C14.5858 81.5182 15.8328 81.9932 17.0799 81.9932C18.327 81.9932 19.5707 81.5183 20.5205 80.5718L23.1206 77.9683C24.7367 76.3522 25.6216 74.21 25.6216 71.9277V52.3058C30.9174 49.2444 34.1632 43.6923 34.1632 37.5765C34.1632 31.9151 31.3274 26.6295 26.5714 23.4452C25.7924 22.9156 24.7264 23.1274 24.2037 23.9132C23.6775 24.6957 23.8859 25.7583 24.6718 26.281C28.4745 28.8333 30.7466 33.0528 30.7466 37.5765C30.7466 42.7459 27.8356 47.4131 23.1479 49.7535C22.5705 50.0439 22.2049 50.635 22.2049 51.2808V71.9243C22.2049 73.2738 21.6583 74.5927 20.705 75.5493L18.1049 78.1528C17.5343 78.72 16.6152 78.72 16.0515 78.1528L12.7578 74.8592L15.8192 71.7978C16.4854 71.1316 16.4854 70.0485 15.8192 69.3822L12.7578 66.3209L15.8192 63.2596C16.1438 62.935 16.3214 62.4977 16.318 62.0433C16.3146 61.5888 16.1267 61.1481 15.8021 60.8303L12.0301 57.1506V51.2705C12.0301 50.6213 11.6611 50.0234 11.0768 49.7364C6.34817 47.4165 3.41325 42.7596 3.41325 37.5833C3.41325 30.6202 8.64417 24.8597 15.3853 24.0226C15.3784 24.272 15.3716 24.5214 15.3716 24.7708V27.7912C14.35 28.3822 13.6633 29.4858 13.6633 30.75C13.6633 32.636 15.1939 34.1667 17.0799 34.1667C18.9659 34.1667 20.4966 32.636 20.4966 30.75C20.4966 29.4858 19.8098 28.3822 18.7882 27.7912V24.7708C18.7882 12.997 28.3686 3.41667 40.1424 3.41667C50.9869 3.41667 60.0718 11.4868 61.3463 22.222L48.9198 34.6484C46.0567 37.5116 44.4167 41.4715 44.4167 45.5203V68.3333C44.4167 75.8705 50.5462 82 58.0833 82H68.3333C75.8705 82 82 75.8705 82 68.3333V45.5203C82 41.4715 80.36 37.5116 77.4968 34.6484V34.6518ZM78.5833 68.3333C78.5833 73.9845 73.9845 78.5833 68.3333 78.5833H58.0833C52.4322 78.5833 47.8333 73.9845 47.8333 68.3333V45.5203C47.8333 42.3735 49.1112 39.2917 51.3354 37.064L63.2083 25.1911L75.0813 37.064C77.3055 39.2882 78.5833 42.3735 78.5833 45.5203V68.3333Z" fill="#05005C"/>
                        </svg>
                    </span>

                    <h2 v-if="tab.active === 0" class="title">Let’s get started! <br> Select Year of Motorcycle</h2>
                </template>

                <template v-if="form==='bike'">
                    <span class="icon_wrapper">
                        <svg width="82" height="62" viewBox="0 0 82 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64.9167 27.5833C63.6969 27.5833 62.5113 27.7132 61.3633 27.9558L58.3601 18.5736C58.8452 18.4301 59.3338 18.3105 59.8327 18.2148C61.9544 17.8117 63.6662 17.4871 65.0977 17.3846C65.9109 21.2523 69.3481 24.1667 73.4549 24.1667C76.2805 24.1667 78.5799 21.8673 78.5799 19.0417V12.2083C78.5799 9.38275 76.2805 7.08333 73.4549 7.08333C69.3139 7.08333 65.8528 10.0456 65.0773 13.9611C63.3655 14.067 61.4932 14.4223 59.1972 14.8597C58.5583 14.9792 57.933 15.1364 57.3146 15.3209L55.1518 8.56275C53.5597 3.58808 48.9813 0.25 43.7641 0.25H35.8682C34.9252 0.25 34.1598 1.01533 34.1598 1.95833C34.1598 2.90133 34.9252 3.66667 35.8682 3.66667H43.7641C47.4917 3.66667 50.7614 6.0515 51.8958 9.60483L54.1371 16.609C52.1349 17.6443 50.3207 19.0417 48.7798 20.75H28.8538C28.7034 20.0291 28.4608 19.3184 28.1226 18.6351C26.6637 15.7241 23.739 13.9167 20.4829 13.9167H8.54167C7.59867 13.9167 6.83333 14.682 6.83333 15.625C6.83333 16.568 7.59867 17.3333 8.54167 17.3333H20.4863C22.468 17.3333 24.1832 18.3925 25.0715 20.1658C25.4097 20.8457 25.5943 21.5563 25.6216 22.267C25.6216 23.2578 25.2355 24.6689 24.5863 25.5333L22.4133 28.4307C20.7016 27.8669 18.9113 27.5799 17.0833 27.5799C7.66358 27.5799 0 35.2435 0 44.6632C0 54.083 7.66358 61.7466 17.0833 61.7466C26.5031 61.7466 34.1667 54.083 34.1667 44.6632C34.1667 44.2772 34.153 43.8979 34.1291 43.5187C35.8784 42.6952 37.4262 41.455 38.6118 39.8799C38.6118 39.8799 50.9459 23.5004 51.0143 23.3911C52.2135 21.98 53.6314 20.8047 55.2031 19.9163L58.1107 28.9978C52.07 31.6321 47.8368 37.6625 47.8368 44.6632C47.8368 54.083 55.5003 61.7466 64.9201 61.7466C74.3398 61.7466 82.0034 54.083 82.0034 44.6632C82.0034 35.2435 74.3398 27.5799 64.9201 27.5799L64.9167 27.5833ZM73.4583 10.5C74.3979 10.5 75.1667 11.2653 75.1667 12.2083V19.0417C75.1667 19.9847 74.3979 20.75 73.4583 20.75C70.6328 20.75 68.3333 18.4506 68.3333 15.625C68.3333 12.7994 70.6328 10.5 73.4583 10.5ZM17.0833 58.3333C9.54617 58.3333 3.41667 52.2038 3.41667 44.6667C3.41667 37.1295 9.54617 31 17.0833 31C18.1493 31 19.1948 31.123 20.2164 31.3622L16.3863 36.4667C15.2144 38.0315 15.0333 40.0883 15.9046 41.8342C16.7758 43.5802 18.5354 44.6667 20.4863 44.6667H29.0417C29.6157 44.6667 30.1862 44.6257 30.7466 44.5437V44.6667C30.7466 52.2038 24.6205 58.3333 17.0833 58.3333ZM35.8784 37.8333C34.2692 39.9722 31.7135 41.25 29.0417 41.25H20.4863C19.8269 41.25 19.2563 40.8981 18.9591 40.307C18.6652 39.7159 18.7268 39.0462 19.1231 38.5167L27.3231 27.5833C28.0987 26.5481 28.6146 25.3796 28.864 24.1667H46.125L35.8784 37.8333ZM64.9167 58.3333C57.3795 58.3333 51.25 52.2038 51.25 44.6667C51.25 39.1863 54.489 34.4508 59.1562 32.2744L63.2869 45.186C63.5193 45.9103 64.1923 46.375 64.9167 46.375C65.0909 46.375 65.2652 46.3477 65.436 46.293C66.3346 46.006 66.83 45.0459 66.543 44.1473L62.4088 31.2323C63.222 31.082 64.0591 31 64.9133 31C72.4504 31 78.5799 37.1295 78.5799 44.6667C78.5799 52.2038 72.4538 58.3333 64.9167 58.3333Z" fill="#05005C"/>
                        </svg>
                    </span>

                    <h2 v-if="tab.active === 0" class="title">Let’s get started! <br> Select Year of Motorcycle</h2>
                </template>

                <template v-if="form==='commercial'">
                    <span class="icon_wrapper">
                        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6667 44.4167H23.9167V47.8333H13.6667V44.4167ZM13.6667 61.5H23.9167V58.0833H13.6667V61.5ZM30.75 61.5H41V58.0833H30.75V61.5ZM13.6667 20.5H23.9167V17.0833H13.6667V20.5ZM13.6667 34.1667H23.9167V30.75H13.6667V34.1667ZM30.75 47.8333H41V44.4167H30.75V47.8333ZM30.75 20.5H41V17.0833H30.75V20.5ZM30.75 34.1667H41V30.75H30.75V34.1667ZM61.5 61.5H68.3333V58.0833H61.5V61.5ZM61.5 34.1667H68.3333V30.75H61.5V34.1667ZM61.5 47.8333H68.3333V44.4167H61.5V47.8333ZM82 25.625V82H0V8.54167C0 3.83008 3.8335 0 8.54167 0H46.125C50.8332 0 54.6667 3.83008 54.6667 8.54167V17.0833H73.4583C78.1665 17.0833 82 20.9134 82 25.625ZM51.25 8.54167C51.25 5.71608 48.9506 3.41667 46.125 3.41667H8.54167C5.71608 3.41667 3.41667 5.71608 3.41667 8.54167V78.5833H51.25V8.54167ZM78.5833 25.625C78.5833 22.7994 76.2839 20.5 73.4583 20.5H54.6667V78.5833H78.5833V25.625Z" fill="#05005C"/>
                        </svg>
                    </span>

                    <h2 v-if="tab.active === 0" class="title">Compare Business Insurance Rates</h2>
                </template>

                <template v-if="form==='medicare'">
                    <span class="icon_wrapper">
                        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.125 3.41667H8.54167C5.71608 3.41667 3.41667 5.71608 3.41667 8.54167V78.5833H41V82H0V8.54167C0 3.8335 3.83008 0 8.54167 0H46.125C50.8366 0 54.6667 3.8335 54.6667 8.54167V37.6619C53.3649 38.6459 52.2272 39.8213 51.25 41.123V8.54167C51.25 5.71608 48.9506 3.41667 46.125 3.41667ZM23.9167 47.8333H13.6667V51.25H23.9167V47.8333ZM30.75 51.25H41V47.8333H30.75V51.25ZM13.6667 64.9167H23.9167V61.5H13.6667V64.9167ZM30.75 64.9167H41V61.5H30.75V64.9167ZM73.4583 64.9167H56.375C51.6634 64.9167 47.8333 68.7502 47.8333 73.4583V82H51.25V73.4583C51.25 70.6328 53.5494 68.3333 56.375 68.3333H73.4583C76.2839 68.3333 78.5833 70.6328 78.5833 73.4583V82H82V73.4583C82 68.7502 78.1699 64.9167 73.4583 64.9167ZM54.6667 51.25C54.6667 45.5988 59.2655 41 64.9167 41C70.5678 41 75.1667 45.5988 75.1667 51.25C75.1667 56.9012 70.5678 61.5 64.9167 61.5C59.2655 61.5 54.6667 56.9012 54.6667 51.25ZM58.0833 51.25C58.0833 55.0186 61.1481 58.0833 64.9167 58.0833C68.6852 58.0833 71.75 55.0186 71.75 51.25C71.75 47.4814 68.6852 44.4167 64.9167 44.4167C61.1481 44.4167 58.0833 47.4814 58.0833 51.25ZM29.0417 34.1667V25.625H37.5833V22.2083H29.0417V13.6667H25.625V22.2083H17.0833V25.625H25.625V34.1667H29.0417Z" fill="#05005C"/>
                        </svg>
                    </span>

                    <h2 v-if="tab.active === 0" class="title">Review Medicare Advantage Plans</h2>
                </template>

                <template v-if="form==='health'">
                    <span class="icon_wrapper">
                        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1507 11.9596C15.9906 11.9596 8.54167 19.3119 8.54167 28.2787C8.54167 33.9038 10.4226 38.8094 14.5773 44.2677L14.5774 44.2679C18.1629 48.9794 23.3591 53.5171 28.9663 58.4089L28.969 58.4112C32.3395 61.3638 37.1281 65.7115 40.9329 69.3895C41.4353 68.919 41.9559 68.4306 42.489 67.9306C45.9465 64.6875 49.928 60.9529 52.8514 58.4078L52.8575 58.4024C59.4805 52.6915 64.8502 47.9743 68.6198 42.506L68.6384 42.4791L68.6387 42.4792C71.9352 37.8879 73.4583 33.153 73.4583 28.2787C73.4583 19.3295 66.0273 11.9596 56.8493 11.9596C53.2089 11.9596 50.4396 12.7598 48.1969 14.1208C45.9399 15.4905 44.1016 17.4978 42.4372 20.0881L40.9958 22.3315L39.5603 20.0843C37.9068 17.4957 36.0742 15.4897 33.8184 14.1208C31.5764 12.7602 28.8023 11.9596 25.1507 11.9596ZM5.125 28.2787C5.125 17.3713 14.1577 8.54297 25.1507 8.54297C29.332 8.54297 32.7385 9.46886 35.5909 11.1999C37.7239 12.4942 39.4825 14.1997 41.0033 16.186C42.5299 14.1997 44.2914 12.4942 46.4244 11.1999C49.276 9.46931 52.6772 8.54297 56.8493 8.54297C67.8652 8.54297 76.875 17.3938 76.875 28.2787C76.875 33.919 75.0968 39.3376 71.4236 44.4586C67.3617 50.3459 61.64 55.3409 55.0924 60.9869C52.2226 63.4855 48.3131 67.1523 44.8623 70.3891C43.8845 71.3062 42.9436 72.1888 42.0735 73.0005L40.8766 74.1171L39.7099 72.9689C35.8251 69.1456 30.4161 64.2212 26.7189 60.9823C26.7185 60.982 26.718 60.9816 26.7176 60.9812L26.5802 60.8614C21.0976 56.0783 15.6655 51.3394 11.8586 46.3371M5.125 28.2787C5.125 34.8191 7.36449 40.4329 11.8585 46.337L5.125 28.2787Z" fill="#05005C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3177 25.8789L37.4005 40.2201L40.018 34.6036L43.2963 38.9143L48.1067 28.7996L55.3615 42.048H78.5859C79.5294 42.048 80.2943 42.8129 80.2943 43.7563C80.2943 44.6998 79.5294 45.4647 78.5859 45.4647H53.3371L48.3209 36.3044L43.9725 45.4478L40.7242 41.1765L37.2535 48.6237L31.743 35.6316L28.5498 45.4647H3.41927C2.47578 45.4647 1.71094 44.6998 1.71094 43.7563C1.71094 42.8129 2.47578 42.048 3.41927 42.048H26.067L31.3177 25.8789Z" fill="#05005C"/>
                        </svg>
                    </span>

                    <h2 v-if="tab.active === 0" class="title">Compare Health Insurance Rates</h2>
                </template>

                <template v-if="form==='life'">
                     <span class="icon_wrapper">
                        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M74.9753 37.9762L63.7448 34.2521C63.3963 34.1359 63.017 34.1359 62.6719 34.2521L51.4413 37.9762C47.2422 39.3703 44.4167 43.2789 44.4167 47.7069V59.4295C44.4167 71.7739 57.6323 79.3487 61.6845 81.3747L62.4498 81.7574C62.689 81.877 62.9487 81.9385 63.2152 81.9385C63.4304 81.9385 63.6491 81.8975 63.8575 81.8155L64.6468 81.4943C68.716 79.8577 82.0034 73.4276 82.0034 59.4295V47.7069C82.0034 43.2789 79.1778 39.3703 74.9753 37.9762ZM78.5833 59.4261C78.5833 71.2785 66.9393 76.8853 63.3655 78.3203L63.2903 78.3544L63.2152 78.3168C59.6072 76.5128 47.8368 69.8128 47.8368 59.4295V47.7069C47.8368 44.7549 49.7193 42.148 52.5176 41.2221L63.2118 37.6756L73.9059 41.2221C76.7042 42.148 78.5867 44.7583 78.5867 47.7069V59.4295L78.5833 59.4261ZM27.3333 0C16.0276 0 6.83333 9.19425 6.83333 20.5C6.83333 31.8057 16.0276 41 27.3333 41C38.6391 41 47.8333 31.8057 47.8333 20.5C47.8333 9.19425 38.6391 0 27.3333 0ZM27.3333 37.5833C17.9136 37.5833 10.25 29.9198 10.25 20.5C10.25 11.0803 17.9136 3.41667 27.3333 3.41667C36.7531 3.41667 44.4167 11.0803 44.4167 20.5C44.4167 29.9198 36.7531 37.5833 27.3333 37.5833ZM37.4877 51.5678C37.1699 52.4595 36.203 52.9207 35.3044 52.6098C32.7522 51.7044 30.0701 51.25 27.3333 51.25C14.1484 51.25 3.41667 61.9783 3.41667 75.1667V80.2917C3.41667 81.2347 2.65133 82 1.70833 82C0.765333 82 0 81.2347 0 80.2917V75.1667C0 60.0958 12.2624 47.8333 27.3333 47.8333C30.4562 47.8333 33.5243 48.3561 36.4456 49.3879C37.3339 49.7023 37.7986 50.6794 37.4877 51.5678Z" fill="#05005C"/>
                        </svg>
                    </span>

                    <h2 v-if="tab.active === 0" class="title">Compare Life Insurance Rates</h2>
                </template>

                <template v-if="form==='home'">
                    <span class="icon_wrapper">
                        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M78.7371 27.4538L71.75 21.9632V6.83758H68.3333V19.2777L46.2788 1.9415C43.1696 -0.50825 38.827 -0.504833 35.7213 1.9415L3.26292 27.4538C1.189 29.0869 0 31.5298 0 34.1709V82.0042H82V34.1709C82 31.5333 80.811 29.0869 78.7371 27.4538ZM78.5833 78.5876H3.41667V34.1709C3.41667 32.589 4.13075 31.1198 5.37442 30.1427L37.8328 4.627C39.6982 3.16467 42.3018 3.16125 44.1673 4.627L76.6256 30.1427C77.8693 31.1198 78.5833 32.589 78.5833 34.1709V78.5876ZM27.3333 61.5043H54.6667V34.1709H27.3333V61.5043ZM30.75 37.5876H51.25V58.0876H30.75V37.5876Z" fill="#05005C"/>
                        </svg>
                    </span>

                    <h2 v-if="tab.active === 0" class="title">Hello, Let's see how much we can <br> save you on home insurance.</h2>
                    <h2 v-if="tab.active === 1" class="title">Ok great! <br> Let's get a few details about you.</h2>
                    <h2 v-if="tab.active === 2" class="title">Almost done, {{ userName.full_name }}<br> Just a few final details.</h2>
                </template>

                <template v-if="form==='auto'">
                    <span class="icon_wrapper">
                        <svg class="icon" width="82" height="76" viewBox="0 0 82 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M82.0034 53.4891C82.0034 44.1445 80.3839 34.9571 77.1927 26.1831L69.8674 6.0418C68.6477 2.6798 65.4189 0.417969 61.8417 0.417969H20.1618C16.5845 0.417969 13.3592 2.67639 12.136 6.0418L4.81067 26.1831C1.61608 34.9571 0 44.1445 0 53.4891V61.9214H6.83333V75.5881H23.9167V61.9214H58.0833V75.5881H75.1667V61.9214H82L82.0034 53.4891ZM15.3477 7.2103C16.0823 5.19105 18.0161 3.83805 20.1618 3.83805H61.8417C63.9873 3.83805 65.9212 5.19105 66.6557 7.2103L73.9811 27.3516C74.0289 27.4848 74.0597 27.6215 74.1075 27.7547H7.89592C7.94375 27.6215 7.9745 27.4848 8.02233 27.3516L15.3477 7.2103ZM20.5034 72.1714H10.2534V61.9214H20.5034V72.1714ZM30.7534 58.5047V51.6714H51.2534V58.5047H30.7534ZM71.7534 72.1714H61.5034V61.9214H71.7534V72.1714ZM78.5867 58.5047H54.6701V48.2547H27.3368V58.5047H3.42008V53.4891C3.42008 49.4266 3.78225 45.4018 4.41775 41.4214H13.6701V38.0047H5.06692C5.54183 35.7019 6.1295 33.4264 6.81967 31.1714H75.1872C75.8773 33.4264 76.465 35.7019 76.9399 38.0047H68.3367V41.4214H77.5891C78.2246 45.3984 78.5867 49.4232 78.5867 53.4891V58.5047Z" fill="#05005C"/>
                        </svg>
                    </span>

                    <h2 v-if="tab.active === 0" class="title">Hello, Let's see how much we can <br> save you on car insurance.</h2>
                    <h2 v-if="tab.active === 1" class="title">Ok great! <br> Let's get a few details about you.</h2>
                    <h2 v-if="tab.active === 2" class="title">Almost done, {{ userName.full_name }}<br> Just a few final details.</h2>
                </template>

            </header>

            <!-- Questions List -->
            <ul class="questions__list">

                <template v-for="(field, i) in questions">
                    <template v-if="field.group !== 'vehicle2' || field.group === 'vehicle2' && isSecondVehicle">
                    <template v-if="field.group !== 'driver2' || field.group === 'driver2' && isSecondDriver">

                        <li v-if="field.type === 'select_auto' && tabPosition(i) === tab.active  && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--select_auto', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />

                            <div class="q_item_in" :class="{ complete: field.complete }">
                                <select-dropdown
                                    :class="{ show: true }"
                                    :options="field.options.years"
                                    :default="field.value.auto_year"
                                    @input="validateSelectAuto('auto_year', $event.value, i)"
                                    @click="loadAutoData($event, 'select_auto__year', i)"
                                />
                                <select-dropdown
                                    :class="{ show: !!(field.value.auto_year) }"
                                    :options="field.options.makes"
                                    :default="field.value.auto_make"
                                    :load="field.load.makes"
                                    @input="validateSelectAuto('auto_make', $event.value, i)"
                                    @click="loadAutoData($event, 'select_auto__makes', i)"
                                />
                                <select-dropdown
                                    :class="{ show: !!(field.value.auto_year && field.value.auto_make) }"
                                    :options="field.options.models"
                                    :default="field.value.auto_model"
                                    :load="field.load.models"
                                    @input="validateSelectAuto('auto_model', $event.value, i)"
                                    @click="loadAutoData($event, 'select_auto__model', i)"
                                />
                            </div>
                        </li>

                        <li v-if="field.type === 'select' && tabPosition(i) === tab.active && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--select_one', {show: field.show, complete: field.complete, ['color-' + (field.repeatGroup ? field.repeatGroup.split('-')[1] : '')]: field.repeatGroup && field.repeatGroup.split('-')[0] === 'incidents' } ]">
                            <question-header :title="field.title" :descr="field.descr" />
                            <select-dropdown
                                :default="field.value"
                                :options="field.options"
                                @input="validate({ value: $event.value, i })"
                            />
                        </li>

                        <li v-if="field.type === 'radio' && tabPosition(i) === tab.active  && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--radio', {show: field.show, complete: field.complete, ['color-' + (field.repeatGroup ? field.repeatGroup.split('-')[1] : '')]: field.repeatGroup && field.repeatGroup.split('-')[0] === 'incidents' } ]">
                            <question-header :title="replaceTitle(field.title)" :descr="field.descr" />

                            <ul v-if="field.descrList?.length" class="radio__descr_list">
                                <li v-for="item in field.descrList" class="radio__descr_item"><span>{{ item }}</span></li>
                            </ul>

                            <FormKit
                                v-model="field.value"
                                type="radio"
                                :options="field.options"
                                @input="validate({ i })"
                            />
                        </li>

                        <li v-if="field.type === 'radio_star' && tabPosition(i) === tab.active  && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--star_mod', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />
                            <FormKit
                                v-model="field.value"
                                name="coverage_radio"
                                type="radio"
                                :options="field.options"
                                @input="scrollController(i)"
                            >
                                <template #label="context">
                                    <span class="label__in">
                                        <span class="title">{{ context.option.value }}</span>
                                        <span class="stars">
                                            <span class="icon_wrapper icon_star_wrap" v-for="star in context.option.star">
                                                <svg class="icon icon_star" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5767 2.21993C10.9183 1.39864 12.0817 1.39864 12.4233 2.21993L14.4395 7.06735C14.5835 7.41358 14.9091 7.65015 15.2829 7.68012L20.5161 8.09966C21.4027 8.17074 21.7623 9.27725 21.0867 9.85592L17.0996 13.2713C16.8148 13.5153 16.6904 13.8981 16.7774 14.2628L17.9956 19.3695C18.202 20.2348 17.2607 20.9186 16.5016 20.455L12.0213 17.7184C11.7012 17.5229 11.2988 17.5229 10.9787 17.7184L6.4984 20.455C5.7393 20.9186 4.79805 20.2348 5.00444 19.3695L6.22257 14.2628C6.30958 13.8981 6.18521 13.5153 5.90042 13.2713L1.91328 9.85592C1.23774 9.27725 1.59727 8.17074 2.48392 8.09966L7.71712 7.68012C8.09091 7.65015 8.41652 7.41358 8.56052 7.06735L10.5767 2.21993Z" fill="#F1B312" stroke="#F1B312" stroke-width="2"/>
                                                </svg>
                                            </span>
                                        </span>
                                        <span class="footer_text">
                                            <span class="text" v-for="text in context.option.descr.split('\n').map(s => s.trim())">{{ text }}</span>
                                        </span>
                                    </span>
                                </template>
                            </FormKit>
                        </li><!-- /Stars -->

                        <li v-if="field.type === 'radio_select' && tabPosition(i) === tab.active  && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--radio_select', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />

                            <div class="q_item_in">
                                <FormKit
                                    id="radio_and_select__radio"
                                    name="select_make__radio"
                                    v-model="field.value"
                                    type="radio"
                                    :options="field.options.radio"
                                    @input="validateRadioAndSelect($event.value, 'radio', i)"
                                />
                                <select-dropdown
                                    id="radio_and_select__select"
                                    name="select_make__select"
                                    :default="field.value"
                                    :options="field.options.select"
                                    @input="validateRadioAndSelect($event.value, 'select', i)"
                                />
                            </div>
                        </li>

                        <li v-if="field.type === 'checkbox' && tabPosition(i) === tab.active  && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--checkbox', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />
                            <FormKit
                                v-model="field.value"
                                type="checkbox"
                                :options="field.options"
                                @input="validateCheckbox(i)"
                            />
                        </li>


                        <li v-if="field.type === 'date' && tabPosition(i) === tab.active  && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--date_mod', {show: field.show, complete: field.complete, ['color-' + (field.repeatGroup ? field.repeatGroup.split('-')[1] : '')]: field.repeatGroup && field.repeatGroup.split('-')[0] === 'incidents' } ]">
                            <question-header :title="field.title" :descr="field.descr" />

                            <div class="q_item_in">
                                <div class="formkit-outer">
                                    <div class="formkit-wrapper">
                                        <label class="formkit-label" for="input_month">Month</label>
                                        <div class="formkit-inner">
                                            <input class="formkit-input"
                                                   type="text"
                                                   :name="'mm_' + i"
                                                   placeholder="MM"
                                                   :id="'input_month_' + i"
                                                   :data-value="field.value.mm"
                                                   v-model="field.value.mm"
                                                   @input="validate({ name: 'm', i, event: $event })"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="formkit-outer">
                                    <div class="formkit-wrapper">
                                        <label class="formkit-label" for="input_day">Day</label>
                                        <div class="formkit-inner">
                                            <input class="formkit-input"
                                                   type="text"
                                                   :name="'dd_' + i"
                                                   placeholder="DD"
                                                   :id="'input_day_' + i"
                                                   :value="field.value.dd"
                                                   v-model="field.value.dd"
                                                   @input="validate({ name: 'd', i, event: $event })"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="formkit-outer">
                                    <div class="formkit-wrapper">
                                        <label class="formkit-label" for="input_year">Year</label>
                                        <div class="formkit-inner">
                                            <input class="formkit-input"
                                                   type="text"
                                                   :name="'yyyy_' + i"
                                                   placeholder="YYYY"
                                                   :id="'input_year_' + i"
                                                   :value="field.value.yyyy"
                                                   v-model="field.value.yyyy"
                                                   @input="validate({ name: 'y', i, event: $event })"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="field.value.error.show" class="field_messages">
                                <span class="message">{{ field.value.error.text }}</span>
                            </div>
                        </li>

                        <li v-if="field.type === 'user_name' && tabPosition(i) === tab.active  && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--user_name_mod', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />

                            <div class="formkit-outer">
                                <div class="formkit-wrapper">
                                    <label class="formkit-label" for="input_full_name">Full Name</label>
                                    <div class="formkit-inner">
                                        <input
                                           placeholder="Full Name"
                                           class="formkit-input"
                                           type="text"
                                           :name="'full_name_' + i"
                                           :id="'input_full_name_' + i"
                                           v-model="field.value.full_name"
                                           @input="validateUserName(i)"
                                           @animationstart="checkAutofill"
                                        >
                                    </div>
                                </div>
                            </div>

                            <div class="formkit-outer">
                                <div class="formkit-wrapper">
                                    <label class="formkit-label" for="input_last_name">Last Name</label>
                                    <div class="formkit-inner">
                                        <input
                                           placeholder="Last Name"
                                           class="formkit-input"
                                           type="text"
                                           name="last_name"
                                           id="input_last_name"
                                           v-model="field.value.last_name"
                                           @input="validateUserName(i)"
                                           @animationstart="checkAutofill"
                                        >
                                    </div>
                                </div>
                            </div>

                        </li>

                        <li v-if="(field.type === 'address' || field.type === 'address_v2') && tabPosition(i) === tab.active  && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, { 'q_item--address_mod': field.type === 'address', 'q_item--address_v2_mod': field.type === 'address_v2', show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />

                            <div class="q_item_in">

                                <FormKit :name="field.type" type="group" v-model="field.value">
                                    <FormKit
                                        v-model="field.value.address"
                                        name="address"
                                        label="Address"
                                        type="text"
                                        @animationstart="checkAutofill"
                                        @input="validateAddress('address', i, $event.value)"
                                        @focus="addressBlur(i, $event)"
                                        @blur="addressBlur(i, $event)"
                                    />
                                    <FormKit
                                        v-model="field.value.unit"
                                        name="unit"
                                        label="Unit #"
                                        type="text"
                                        @animationstart="checkAutofill"
                                        @input="validateAddress('unit', i, $event.value)"
                                        @focus="addressBlur(i, $event)"
                                        @blur="addressBlur(i, $event)"
                                    />
                                    <FormKit
                                        v-if="field.type === 'address_v2'"
                                        name="city"
                                        label="City"
                                        type="text"
                                        @animationstart="checkAutofill"
                                        @input="validateAddress('city', i, $event.value)"
                                        @focus="addressBlur(i, $event)"
                                        @blur="addressBlur(i, $event)"
                                    />
                                    <FormKit
                                        v-if="field.type === 'address'"
                                        name="apt"
                                        label="Apt or unit (optional)"
                                        type="text"
                                        @animationstart="checkAutofill"
                                        @input="validateAddress('apt', i, $event.value)"
                                        @focus="addressBlur(i, $event)"
                                        @blur="addressBlur(i, $event)"
                                    />

                                    <div class="select_dropdown">
                                        <label>State: </label>
                                        <select-dropdown
                                            name="state"
                                            :default="field.value.state"
                                            :options="field.options"
                                            @input="validateAddress('state', i, $event.value)"
                                            @focus="addressBlur(i, $event)"
                                            @blur="addressBlur(i, $event)"
                                        />
                                    </div>

                                    <FormKit
                                        label="Enter ZIP Code"
                                        type="text"
                                        name="zip"
                                        @animationstart="checkAutofill"
                                        @input="validateAddress('zip', i, $event.value)"
                                        @focus="addressBlur(i, $event)"
                                        @blur="addressBlur(i, $event)"
                                    />
                                </FormKit>

                            </div>
                        </li>

                        <li v-if="field.type === 'size' && tabPosition(i) === tab.active  && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--size_mod', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />
                            <FormKit
                                v-model="field.value"
                                type="number"
                                label="lbs."
                                number
                                name="lbs"
                                :delay="500"
                                @input="scrollController(i)"
                            />
                        </li>

                        <li v-if="field.type === 'size_two' && tabPosition(i) === tab.active  && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--size_two_mod', {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />

                            <div class="q_item__in">
                                <div class="formkit-outer">
                                    <div class="formkit-wrapper">
                                        <label class="formkit-label" for="input_size_two_ft">ft.</label>
                                        <div class="formkit-inner">
                                            <input class="formkit-input"
                                                   type="number"
                                                   name="ft"
                                                   id="input_size_two_ft"
                                                   v-model="field.value.ft"
                                                   @input="validateText(i)"
                                                   @focus="sizeTwoBlur(i, $event)"
                                                   @blur="sizeTwoBlur(i, $event)"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="formkit-outer">
                                    <div class="formkit-wrapper">
                                        <label class="formkit-label" for="input_size_two_in">in.</label>
                                        <div class="formkit-inner">
                                            <input class="formkit-input"
                                                   type="number"
                                                   name="in"
                                                   id="input_size_two_in"
                                                   v-model="field.value.in"
                                                   @input="validateText(i)"
                                                   @focus="sizeTwoBlur(i, $event)"
                                                   @blur="sizeTwoBlur(i, $event)"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li v-if="['text', 'number', 'email'].includes(field.type) && tabPosition(i) === tab.active  && field.active !== 0" :ref="'qs' + i" :key="field.title" :class="[ 'q_item', 'id'+i, 'q_item--text_one', 'q_item--field_type__'+field.type, {show: field.show, complete: field.complete} ]">
                            <question-header :title="field.title" :descr="field.descr" />

                            <div class="formkit-outer" data-family="text" data-type="number" data-complete="true">
                                <div class="formkit-wrapper">
                                    <div class="formkit-inner">
                                        <input v-if="field.type === 'number'"
                                            class="formkit-input"
                                            v-model="field.value"
                                            :id="'input_' + i"
                                            type="number"
                                            :min="field.minValue"
                                            :step="field.step"
                                            :name="field.name || field.title"
                                            :placeholder="field.placeholder"
                                            @animationstart="checkAutofill"
                                            @input="validateText(i)"
                                        >
                                        <input v-if="field.type !== 'number'"
                                            class="formkit-input"
                                            v-model="field.value"
                                            :id="'input_' + i"
                                            :type="field.type"
                                            :name="field.name || field.title"
                                            :placeholder="field.placeholder"
                                            @animationstart="checkAutofill"
                                            @input="validateText(i)"
                                        >
                                    </div>
                                </div>
                            </div>
                        </li>

                    </template>
                    </template>
                </template>

                <li :class="['button_next_tab', { done: !isTabs }]" v-show="tab.active === 0 && tab.complete[0]">
                    <button type="button" @click="goTab(1, true)">
                        <span v-if="isTabs">Next Step</span>
                        <span v-if="!isTabs">Get a Quote</span>
                    </button>
                </li>

                <li :class="['button_next_tab']" v-show="isTabs && tab.active === 1 && tab.complete[0] && tab.complete[1]">
                    <button type="button" @click="goTab(2, true)">Continue to Final Step</button>
                </li>

                <li :class="['button_next_tab', { done: isTabs }]" v-show="isTabs && tab.active === 2 && tab.complete[0] && tab.complete[1] && tab.complete[2]">
                    <button type="button" @click="goTab(3, true)">Get my good quotes</button>
                </li>

                <privacy-policy v-if="showPrivacyPolicy" />

            </ul>

        </div></form>

        <done v-if="showDonePage" :sendContentAjax="sendContent" :homeUrl="paramsPhp.homeUrl" :class="formModClass" />
    </div>
</template>



<script>
import moment from 'moment'
import QuestionHeader from './parts/QuestionHeader.vue'
import Done from './parts/Done.vue'
import PrivacyPolicy from './parts/PrivacyPolicy.vue'
import SelectDropdown from './parts/SelectDropdown.vue'
import IconOk from './parts/IconOk.vue'
import axios from 'axios'
import {motorcycleDatabase} from '../assets/data/moto.js'
import {
    accident,
    damage,
    dateIncident,
    lastIncidents,
    typeIncident,
    typeIncidents
} from "../assets/data/questions-repeat.js";
import {
    howLongHaveYouBeenWithCompanyFunc,
    whatCompanyAreYouInsuredWithFunc,
    whenDoesYourPolicyExpireFunc,
    selectDeductibleForCollisionFunc,
    selectDeductibleForComprehensiveFunc, pleaseSelectAnyHealthConditionsThatApplyFunc,
} from "../assets/data/questions-export.js";

export default {
    components: { Done, PrivacyPolicy, SelectDropdown, QuestionHeader, IconOk },
    props: {
        form: { type: String, required: true },
        qs: { type: Object, required: true },
    },
    data() {
        return {
            questions: this.qs.map((q, i) => { q.id = i; return q }),
            tab: {active: 0, complete: [0, 0, 0, 0], available: [0, 0, 0, 0]},
            nav: { auto: ['Vehicles', 'Drivers', 'Final Details', 'Quotes'], home: ['Home', 'Owner', 'Final Details', 'Quotes'] },
            tabs: { auto: [15, 36, -1], home: [8, 15, -1] }, // Only tabs with a list of questions, do not include the final tab. -1 === All other questions

            progressDone: 0,
            autofilled: false,
            isSecondVehicle: false,
            isSecondDriver: false,
            repeat: { map: [] }
        }
    },
    computed: {
        paramsPhp() {
            let paramsPhp = {}
            if (typeof sfi_params !== 'undefined') {
                paramsPhp = sfi_params
            }

            if (!paramsPhp.homeUrl) {
                paramsPhp.homeUrl = 'http://localhost:8080/wp12/wp-content/plugins/shppb_forms_insurance/dist/'
            }

            return paramsPhp
        },
        formModClass() {
            return [`form--${this.form}`]
        },
        autoMake() {
            const auto = this.questions.find(q => q.key === 'select_auto')
            return auto?.value
        },
        autoMake2() {
            const auto2 = this.questions.find(q => q.key === 'select_auto2')
            return auto2?.value
        },
        userName() {
            const user = this.questions.find(q => q.type === 'user_name')
            return user?.value
        },
        companyName() {
            const companyName = this.questions.find(q => q.key === 'select_insured_company')
            return companyName?.value
        },
        progress() {
            return this.questions.filter(q => q.complete).length * 100 / this.questions.length
        },
        isTabs() {
            return !!this.tabs[this.form]
        },
        showPrivacyPolicy() {
            if (this.isTabs) {
                return this.tab.active === this.tabs[this.form].length - 1 && this.tab.complete[this.tab.active]
            } else {
                return this.tab.active !== 1 && this.tab.complete[this.tab.active]
            }
        },
        showDonePage() {
            if (this.isTabs) {
                return this.tab.active === this.tabs[this.form].length
            } else {
                return this.tab.active === 1
            }
        },
        isPenultimateTab() {
            const penultimateTab  = this.tab.available.length - 1
            return this.tab.active === penultimateTab
        },
    },
    methods: {
        navClass(tab) {
            return { active: this.tab.active === tab, complete: !!this.tab.complete[tab], available: !!this.tab.available[tab] }
        },
        replaceTitle(title) {

            if (title.includes('%%auto_make%%')) {
                return title.replace('%%auto_make%%', `${this.autoMake.auto_make} ${this.autoMake.auto_model}`)
            }

            if (title.includes('%%second_auto_make%%')) {
                return title.replace('%%second_auto_make%%', `${this.autoMake2.auto_make} ${this.autoMake2.auto_model}`)
            }

            if (title.includes('%%company_name%%')) {
                return title.replace('%%company_name%%', this.companyName)
            }

            return title
        },

        /** Load Data */
        loadAutoData(event, fieldType, i) {
            const self = this
            const question = this.questions[i]
            const htmlElem = this.$refs['qs' + i][0]

            if (!event.target.classList.contains('selected')) {
                self.scrollController(i)
            }

            if (fieldType === 'select_auto__year') {

                if (htmlElem) this.scrollToSmoothly(this.getCoords(htmlElem).top - 80)

                const year = question.value.auto_year

                if (!!year) {
                    question.load.makes = true
                    question.value.auto_make = ''
                    question.value.auto_model = ''
                    const makes = htmlElem.querySelectorAll('.custom-select')[1].querySelector('.selected')
                    const models = htmlElem.querySelectorAll('.custom-select')[2].querySelector('.selected')
                    makes.innerHTML = question.options.makes[0]
                    models.innerHTML = question.options.models[0]

                    axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=' + year)
                        .then(function (data) {
                            const response = data.request.response
                            const obj = JSON.parse(response)
                            const arr = obj.menuItem.map(elem => elem.value)
                            question.options.makes = [question.options.makes[0], ...arr]
                        })
                        .catch(function (error) {
                            console.log(error.message)
                        })
                        .finally(function () {
                            question.load.makes = false
                        })
                }
            }

            if (fieldType === 'select_auto__makes' && !!question.value.auto_make) {

                question.load.models = true
                question.value.auto_model = ''
                const models = htmlElem.querySelectorAll('.custom-select')[2].querySelector('.selected')
                models.innerHTML = question.options.models[0]

                const host = 'www.fueleconomy.gov'
                const make = question.value.auto_make
                const year = question.value.auto_year
                const url = 'https://' + host + '/ws/rest/vehicle/menu/model?year=' + year + '&make=' + make

                axios.get(url)
                    .then(function (data) {
                        const response = data.request.response
                        const obj = JSON.parse(response)
                        const arr = obj.menuItem.map(elem => elem.value)

                        question.options.models = [ question.options.models[0], ...arr ]
                    })
                    .catch(function (error) {
                        console.log(error.message)
                    })
                    .finally(function () {
                        question.load.models = false
                    })
            }
        },

        /** Validate Field */
        validate({ name, value, i, event }) {
            const question = this.questions[i]

            if (question.type === 'select') {
                this.validateSelect(value, i)
            }
            if (question.type === 'radio') {
                this.validateRadio(i)
            }
            if (question.type === 'date') {
                this.validateDate(name, i, event)
            }

            setTimeout(() => {
                this.incidentsRepeat(i)
                this.managerTabs()
                this.scrollController(i)
            }, 0)
        },
        validateSelectAuto(key, value, i) {
            const q = this.questions[i]

            q.value[key] = value
            q.complete = !!(q.value.auto_year && q.value.auto_make && q.value.auto_model)
        },
        validateSelect(value, i) {
            const question = this.questions[i]
            question.value = value
            question.complete = !!value
        },
        validateRadioAndSelect(value, type, i) {

            const question = this.questions[i]

            if (type === 'radio') {
                const select = document.getElementById('radio_and_select__select')
                const option = select.querySelector('.item')

                if (select && option) {
                    const selected = select.querySelector('.selected')
                    selected.innerHTML = option.innerHTML
                    select.querySelectorAll('.item').forEach(elem => elem.classList.remove('selected_value'))
                }
            }

            if (type === 'select') {
                question.value = value
            }

            question.complete = !!value

            this.setMotorcycleModels(i)
            this.scrollController(i)
        },
        validateRadio(i) {
            const question = this.questions[i]
            const self = this

            setTimeout(() => {
                if (question.key === 'add_second_vehicle') {
                    self.isSecondVehicle = ('yes' === question.value?.toLowerCase())
                }

                if (question.key === 'add_second_driver') {
                    self.isSecondDriver = ('yes' === question.value?.toLowerCase())
                }

                if (question.key === 'is_insured') {
                    if (question.value === 'Yes') {
                        if (self.questions[i + 1].parent !== 'is_insured') {

                            if (self.form === 'auto') {
                                self.questions.splice(i + 1, 0,
                                    whatCompanyAreYouInsuredWithFunc(),
                                    howLongHaveYouBeenWithCompanyFunc(),
                                    whenDoesYourPolicyExpireFunc()
                                )
                                // self.tabs[self.form][self.tab.active] += 3
                            }

                            if (self.form === 'home') {
                                self.questions.splice(i + 1, 0,
                                    whatCompanyAreYouInsuredWithFunc(),
                                    howLongHaveYouBeenWithCompanyFunc(),
                                    whenDoesYourPolicyExpireFunc()
                                )
                                self.tabs[self.form][self.tab.active] += 3
                            }

                            if (self.form === 'bike') {
                                self.questions.splice(i + 1, 0,
                                    whatCompanyAreYouInsuredWithFunc(),
                                    howLongHaveYouBeenWithCompanyFunc()
                                )
                            }

                            if (self.form === 'renters') {
                                self.questions.splice(i + 1, 0,
                                    whatCompanyAreYouInsuredWithFunc()
                                )
                            }

                        }
                    } else {
                        if (self.questions[i + 1].parent === 'is_insured') {
                            if (self.form === 'auto') {
                                self.questions.splice(i + 1, 3)
                                self.tabs[self.form][self.tab.active] -= 3
                            }
                            if (self.form === 'home') {
                                self.questions.splice(i + 1, 3)
                                self.tabs[self.form][self.tab.active] -= 3
                            }
                            if (self.form === 'bike') {
                                self.questions.splice(i + 1, 2)
                            }
                            if (self.form === 'renters') {
                                self.questions.splice(i + 1, 1)
                            }
                        }
                    }
                }

                if (question.value === 'Full Coverage') {
                    if (self.questions[i + 1].parent !== 'Full Coverage') {
                        self.questions.splice(
                            i + 1,
                            0,
                            selectDeductibleForCollisionFunc(question.group === 'vehicle2'),
                            selectDeductibleForComprehensiveFunc(question.group === 'vehicle2')
                        )
                        self.tabs[self.form][self.tab.active] += 2
                    }
                }
                if (question.value === 'Liability Only') {
                    if (self.questions[i + 1].parent === 'Full Coverage') {
                        self.questions.splice(i + 1, 2)
                        self.tabs[self.form][self.tab.active] -= 2
                    }
                }

                if (question.key === 'is_health_conditions') {
                    if (question.value === 'Yes') {
                        if (self.questions[i + 1].parent !== 'is_health_conditions') {
                            self.questions.splice(i + 1, 0,
                                pleaseSelectAnyHealthConditionsThatApplyFunc()
                            )
                        }

                    } else {
                        if (self.questions[i + 1].parent === 'is_health_conditions') {
                            self.questions.splice(i + 1, 1)
                        }
                    }
                }

                question.complete = !!question.value

            }, 0)
        },
        validateDate(name, i, event) {
            const question = this.questions[i]

            if (question.optional) {
                question.value.error.show = false
                question.show = true
                question.complete = true
                return
            }

            const getMaxDate = (month, year) => {
                if (month === 2) {
                    return year ? moment(`${year}-02`, 'YYYY-MM').daysInMonth() : 29
                } else {
                    return [4, 6, 9, 11].includes(month) ? 30 : 31
                }
            }

            setTimeout(() => {
                if (name === 'm' || name === 'd') {
                    let value = Math.abs(event.target.value.trim().replace(/\D/g, '').replace(/^0+/, '').slice(0, 2))
                    const maxValue = name === 'm' ? 12 : getMaxDate(+question.value.mm, +question.value.yyyy)

                    if (value > maxValue) {
                        value = +(('' + value).charAt(0))
                    }
                    if (value !== 0) {
                        value = (('' + value).padStart(2, '0'))
                    }

                    question.value[name === 'm' ? 'mm' : 'dd'] = value

                    if (value.length === 2) {
                        const htmlElem = this.$refs['qs' + i][0]
                        const fDay = htmlElem.querySelector('input[name*="dd"]')
                        const fYear = htmlElem.querySelector('input[name*="yyyy"]')

                        setTimeout(() => {
                            if (name === 'm') {
                                fDay.focus()
                                fDay.select()
                            } else {
                                fYear.focus()
                                fYear.select()
                            }
                        }, 300)
                    }
                }

                if (name === 'y') {
                    let value = Math.abs(event.target.value.trim().replace(/\D/g, '').replace(/^0+/, '').slice(0, 4))
                    const minValue = 1925
                    const maxValue = moment().year()

                    if (value > maxValue) {
                        value = '' + maxValue
                    }
                    if (('' + value).length === 4 && value < minValue) {
                        value = '' + minValue
                    }

                    question.value.yyyy = value
                }


                // Перевірка на вік, показ повідомлень

                setTimeout(() => {
                    const { mm, dd, yyyy } = question.value
                    const { min, max } = question
                    const isAge = this.validateAge( +mm, +dd, +yyyy, min, max )

                    if (isAge === 1) {
                        question.value.error.show = false
                        question.show = true
                        question.complete = true
                    } else {
                        question.complete = false

                        if (isAge === 0) {
                            question.value.error.show = true
                        }
                    }

                }, 300)
            }, 300)
        },
        validateAge(month, day, year, min = 18, max = 0 ) {
            if ([month, day, year].includes(undefined) || String(year).length !== 4) return -1

            if (max !== 0 && max < min) max = 0

            // Перевірити валідність дати та кількість років

            const dateString = [year, month, day].join('-')
            const dateFormat = 'YYYY-MM-DD'

            // Відняти роки від поточної дати
            const minY = moment().subtract( min, 'years')
            const maxY = moment().subtract( max, 'years')

            if (moment(dateString, dateFormat).isValid()) {

                const isMinDate = moment(dateString, dateFormat).isSameOrBefore(minY)
                const isMaxDate = max === 0
                    ? moment(dateString, dateFormat).isSameOrBefore(maxY)
                    : !moment(dateString, dateFormat).isSameOrBefore(maxY)

                return isMinDate && isMaxDate ? 1 : 0

            } else {
                return -1 // invalid date
            }
        },
        validateUserName(i) {

            setTimeout(() => {
                const question = this.questions[i]
                const { full_name, last_name } = question.value
                question.value.full_name = full_name[0] ? full_name[0].toUpperCase() + full_name.substring(1) : ''
                question.value.last_name = last_name[0] ? last_name[0].toUpperCase() + last_name.substring(1) : ''

                if (this.autofilled) {
                    question.complete = !!full_name && !!last_name
                } else {
                    question.complete = !!full_name && !!last_name
                    question.onInput = true
                }

                this.scrollController(i)
            }, 300)

        },
        validateAddress(name, i, value) {
            const self = this
            const question = this.questions[i]
            const isTypeAddress2 = question.type === 'address_v2'

            setTimeout(() => {
                question.value.zip = question.value.zip.trim().replace(/\D/g, '').slice(0, 5)

                const valid = {
                    address: !!question.value.address,
                    zip: !!question.value.zip,
                    // unit: !!question.value.unit,
                    // city: isTypeAddress2 ? !!question.value.city : true,
                    // state: !!question.value.state,
                }

                // if (name === 'state') {
                //     question.value.state = value
                //     valid.state = !!value
                // }

                // question.complete = valid.address && valid.unit && valid.city && valid.state && valid.zip
                question.complete = valid.address && valid.zip


                if (!this.autofilled) {
                    question.onInput = true
                }

                // self.setStatusCompleteQuestions()
                self.scrollController(i)

            }, 300)
        },
        validateText(i) {
            const question = this.questions[i]
            const { type, key } = question

            const validateValue = (value, isUnicode = false) => {
                return String(value).toLowerCase().match(isUnicode ? question.patternUnicode : question.pattern)
            }

            // main
            setTimeout(() => {

                if (type === 'email' || (type === 'text' && key === 'phone_number')) {
                    question.complete = !!validateValue(question.value)
                }
                if (type === 'text' && key === undefined) {
                    question.value = question.value[0].toUpperCase() + question.value.substring(1)
                    question.complete = !!question.value
                }

                if (type === 'size') {
                    question.complete = !!(+question.value)
                }

                if (type === 'size_two') {
                    const ftInt = !!(+question.value.ft)
                    const inInt = question.value.in.length !== 0 && typeof +question.value.in === 'number'
                    question.complete = ftInt && inInt
                }

                if (type === 'number') {

                    if (key === 'year') {
                        let value = Math.abs(('' + question.value).trim().replace(/\D/g, '').replace(/^0+/, '').slice(0, 4))
                        const minValue = question.minValue !== undefined ? question.minValue : 0
                        const maxValue = moment().year()

                        if (value > maxValue) {
                            value = '' + maxValue
                        }
                        if (('' + value).length === 4 && value < minValue) {
                            value = '' + minValue
                        }

                        question.value = value

                        if (('' + question.value).length === 4) {
                            question.complete = +question.value >= minValue && +question.value <= maxValue;
                        }
                    }

                    if (key === 'number') {
                        question.value = +question.value

                        question.complete = question.value > 0
                    }
                }

                if (question.autofilled) {
                    question.complete = !!question.value
                }

                this.scrollController(i)
            }, 0)
        },
        validateCheckbox(i) {
            const question = this.questions[i]
            setTimeout(() => {
                question.complete = question.value.length > 0

                this.scrollController(i)
            }, 0)
        },

        /** Address Focus & Blur */
        addressBlur(i, event) {
            const qItem = event.target.closest('.q_item.id'+ i +'.show')
            const fieldAddress = qItem.querySelector('input[name="address"]')
            const fieldZip = qItem.querySelector('input[name="zip"]')
            const { address, zip } = this.questions[i].value

            if (event.type === 'blur') {
                this.questions[i].focus = 'blur'
            } else {
                this.questions[i].focus = 'focus'
                fieldAddress.classList.remove('valid_error')
                fieldZip.classList.remove('valid_error')
            }

            if (this.questions[i].focus === 'blur') {

                if ( ! address ) {
                    fieldAddress.classList.add('valid_error')
                }
                if ( ! zip ) {
                    fieldZip.classList.add('valid_error')
                }
            }
        },
        /** Size Two Focus & Blur */
        sizeTwoBlur(i, event) {
            const qItem = event.target.closest('.q_item.id'+ i +'.show')
            const fieldFt = qItem.querySelector('input[name="ft"]')
            const fieldIn = qItem.querySelector('input[name="in"]')
            const { ft: valueFt, in: valueIn } = this.questions[i].value

            if (event.type === 'blur') {
                this.questions[i].focus = 'blur'
            } else {
                this.questions[i].focus = 'focus'
                fieldFt.classList.remove('valid_error')
                fieldIn.classList.remove('valid_error')
            }

            if (this.questions[i].focus === 'blur') {

                if ( ! valueFt ) {
                    fieldFt.classList.add('valid_error')
                }
                if ( ! valueIn && valueIn !== 0 ) {
                    fieldIn.classList.add('valid_error')
                }
            }
        },

        /** Check Autofill */
        checkAutofill(e) {
            if(e.animationName === "onAutoFillStart") {
                this.autofilled = true;
            }
            else if(e.animationName === "onAutoFillCancel") {
                this.autofilled = false;
            }
        },

        /** Repeat (Incidents) */
        getIndexRepeatGroup() {
            return +this.questions
                .filter(o => o.indexInGroup === 0)
                .sort((a, b) => a.repeatGroup.split('-')[1] - b.repeatGroup.split('-')[1])
                .pop()?.repeatGroup.split('-')[1] + 1 || 0
        },
        createRepeatField({ repeatGroup, indexInGroup, typeIncident, startIndex, fn, other }) {
            const newQuestion = fn({ repeatGroup, indexInGroup, typeIncident, other })
            this.questions.splice(startIndex, 0, newQuestion)
            this.tabs[this.form][1] += 1
        },
        incidentsRepeat(i) {
            const self = this
            const q = this.questions[i]
            const groupNames = ['incidents', 'incidents2']

            setTimeout(() => {

                const repeatNamePrefix = q.repeatGroup?.split('-')?.[0]

                if (groupNames.includes(repeatNamePrefix)) {
                    const repeatGroup = q.repeatGroup
                    const indexInGroup = q.indexInGroup


                    /** IS INCIDENTS */
                    if (indexInGroup === 0) {

                        // якщо тільки початок циклу повторень.
                        if (!self.questions.filter(o => o.indexInGroup === 0).length) {
                            self.questions = [{...q}]
                        }

                        const repeatGroupElements = self.questions.filter(e => e.repeatGroup === q.repeatGroup)

                        if (q.value === 'Yes') {

                            if (repeatGroupElements.length === 1) {

                                /* Add Type INCIDENTS (Ticket, Accident, Claim, DUI, License Suspension) */
                                // Додаємо перше питання вибір варіанта інцидента
                                this.createRepeatField({
                                    fn: typeIncidents,
                                    repeatGroup,
                                    indexInGroup: 1,
                                    typeIncident: null,
                                    startIndex: i + 1,
                                })
                            }

                        } else {

                            if (repeatGroupElements.length > 1) {

                                let indexR = self.questions.findIndex(e => e.repeatGroup === q.repeatGroup)
                                let lenR = repeatGroupElements.length

                                if (
                                    !self.questions[indexR + repeatGroupElements.length].repeatGroup &&
                                    self.questions[indexR + repeatGroupElements.length].indexInGroup !== 0
                                ) {
                                    indexR += 1
                                    lenR -= 1
                                }

                                self.questions.splice(indexR, lenR)
                                self.tabs[self.form][1] -= lenR
                            }
                        }
                    }

                    /** Type INCIDENTS */
                    if (indexInGroup === 1) {

                        // В залежності від вибору варіанта першого питання
                        // додаємо наступні питання (всі + додаткове питання для наступного повтору)
                        if (q.value) {

                            // Потрібно видалити зайві питання при зміні типу інцидента в другому питанні (з індексом 1)
                            const groupToDelStartIndex = self.questions.findIndex(e => e.repeatGroup === q.repeatGroup && e.indexInGroup > 1)
                            const groupToDel = self.questions.filter(e => e.repeatGroup === q.repeatGroup && e.indexInGroup > 1)

                            // Умова чи потрібно додаткове питання для настопного повтору, циклу
                            // Перевірка чи таке питання вже існує
                            const needNextQuestion =
                                !self.questions[groupToDelStartIndex + groupToDel.length]?.repeatGroup &&
                                self.questions[groupToDelStartIndex + groupToDel.length]?.indexInGroup !== 0

                            if (groupToDelStartIndex >= 0) {
                                self.questions.splice(groupToDelStartIndex, groupToDel.length)
                                self.tabs[self.form][1] -= groupToDel.length
                            }

                            let offsetIndex = 0

                            /* Add Date Incident Question */
                            this.createRepeatField({
                                fn: dateIncident,
                                repeatGroup,
                                indexInGroup: 2,
                                typeIncident: q.value.toLowerCase(),
                                startIndex: i + ++offsetIndex,
                            })

                            if (q.value.toLowerCase() !== 'license suspension') {

                                /* Add Type incident Question */
                                this.createRepeatField({
                                    fn: typeIncident,
                                    repeatGroup,
                                    indexInGroup: 3,
                                    typeIncident: q.value.toLowerCase(),
                                    startIndex: i + ++offsetIndex,
                                })


                                if (q.value.toLowerCase() === 'accident') {

                                    /* Add Accident Question */
                                    this.createRepeatField({
                                        fn: accident,
                                        repeatGroup,
                                        indexInGroup: 4,
                                        startIndex: i + ++offsetIndex,
                                    })

                                    /* Add Damage Question */
                                    this.createRepeatField({
                                        fn: damage,
                                        repeatGroup,
                                        indexInGroup: 5,
                                        startIndex: i + ++offsetIndex,
                                    })
                                }
                            }

                            if (needNextQuestion) {
                                // Додаткове питання для настопного повтору, циклу
                                /* Add question new group - IS INCIDENTS == (Ticket, Accident, Claim, DUI, License Suspension) */
                                this.createRepeatField({
                                    fn: lastIncidents,
                                    repeatGroup: `${repeatNamePrefix}-${self.getIndexRepeatGroup()}`,
                                    indexInGroup: 0,
                                    startIndex: i + ++offsetIndex,
                                    other: true
                                })
                            }
                        }
                    }
                }

            }, 0)
        },

        /** Set options motorcycle models  */
        setMotorcycleModels(i) {
            const fieldSelectMotorcycleMake = this.questions[i]
            setTimeout(() => {
                if (fieldSelectMotorcycleMake.key === 'select_motorcycle_make') {
                    const fieldSelectModels = this.qs.find(q => q.key === 'select_motorcycle_models')

                    if (fieldSelectModels) {
                        const options = motorcycleDatabase
                            .filter(obj => obj.make.toLowerCase() === fieldSelectMotorcycleMake.value.toLowerCase())

                        if (!options[0]?.models.length) {
                            fieldSelectModels.options = [ fieldSelectMotorcycleMake.value ]
                        } else {
                            fieldSelectModels.options = options[0]?.models
                        }
                    }
                }
            }, 0)
        },

        /** Validate - Set Status Complete */
        setStatusCompleteQuestions() {

            this.questions.forEach((q, inxQ) => {
                let complete

                if (q.optional) {

                    complete = true

                } else {

                    // Value Is Object
                    if (typeof q.value === 'object' && !Array.isArray(q.value) && q.value !== null) {

                        // Birth
                        if (q.type === 'date') {
                            complete = q.complete === undefined ? !!q.value.dd && !!q.value.mm && !!q.value.yyyy : q.complete
                        }

                        // Address
                        else if (q.type === 'address' || q.type === 'address_v2') {
                            const { address, unit, apt, city, state, zip } = q.value
                            const validCity = q.type === 'address_v2' ? !!city : true
                            // complete = !!address && !!state && !!zip && validCity
                            complete = !!address && !!zip
                        }

                        // Name
                        else if (q.type === 'user_name') {
                            complete = !!q.value.full_name && !!q.value.last_name

                            if (!q.onInput) {
                                q.onInput = false
                            }
                        }

                        // Для всих остальних
                        else {
                            if (q.type === 'size_two') {
                                const ftInt = !!(+q.value.ft)
                                const inInt = q.value.in.length !== 0 && typeof +q.value.in === 'number'
                                complete = ftInt && inInt
                            } else {
                                complete = Object.entries(q.value).every(arr => !!arr[1])
                            }
                        }
                    }

                        // TYPE Checkbox
                    // Value is Array
                    else if (typeof q.value === 'object' && Array.isArray(q.value) && q.value !== null) {
                        complete = q.complete === undefined ? q.value.length > 0 : q.complete
                    }

                    // Email
                    else if (['email', 'text', 'number'].includes(q.type)) {
                        complete = q.complete === undefined ? !!q.value : q.complete
                    }

                    // Value is String
                    else {
                        complete = !!q.value
                    }
                }

                q.complete = complete
            })

        },

        tabPosition(i) {
            if (!this.isTabs) return 0

            let start = 0, tab = -1
            for (const end of this.tabs[this.form]) {
                tab++
                if (i >= start && i < end) return tab
                start = end
            }
            return tab
        },
        managerTabs() {
            this.tab.complete = [] // [0, 0, 0, 0]
            this.tab.available = [] // [0, 0, 0, 0]
            // tabs: { auto: [8, 19, -1], home: [8, 15, -1] },

            // const tabs = this.tabs[this.form] ? this.tabs[this.form] : [0]
            const tabs = this.tabs[this.form] || [0]

            // Complete Set

            let start = 0, tab = 0
            for (const count of tabs) {
                const end = count > 0 ? count : this.questions.length
                let complete = 1

                for (let j = start; j < end; j++) {

                    if (!this.isSecondVehicle && this.questions[j].group === 'vehicle2') {
                        continue
                    }
                    if (!this.isSecondDriver && this.questions[j].group === 'driver2') {
                        continue
                    }

                    if (!this.questions[j].complete) {
                        complete = 0
                        break
                    }
                }

                this.tab.complete.push(complete)

                start = end
                tab++
            }
            this.tab.complete.push(0)  // + Done Tab


            // Available Set

            let prevComplete = undefined
            let prevAvailable = undefined
            let available = 1
            for (const complete of this.tab.complete) { // complete 0 or 1
                if (prevComplete === undefined) available = 1
                if (prevComplete === 0) available = 0
                if (prevComplete === 1) available = (prevAvailable === 0) ? 0 : 1

                this.tab.available.push(available)

                prevComplete = complete
                prevAvailable = available
            }

            this.tab.available[this.tab.available.length - 1] = 0
        },
        managerShowQuestions() {
            setTimeout(() => {
                for (let i = 0; i < this.questions.length; i++) {
                    let q = this.questions[i]
                    let next = this.questions[i + 1]

                    if (!this.isSecondVehicle) {
                        if (q.group === 'vehicle2') continue

                        if (next?.group === 'vehicle2') {
                            next = this.questions.find((e, n) => n > i && e.group !== 'vehicle2')
                        }
                    }
                    if (!this.isSecondDriver) {
                        if (q.group === 'driver2') continue

                        if (next?.group === 'driver2') {
                            next = this.questions.find((e, n) => n > i && e.group !== 'driver2')
                        }
                    }

                    if (next) {
                        if (q.show && q.complete) {
                            next.show = true
                        }
                        if (q.show && !q.complete) {
                            next.show = false
                        }
                        if (!q.show) {
                            next.show = false
                        }
                    }
                }
            }, 0)
        },
        goTab(tab, isButton = false) {
            this.tab.active = tab

            this.progressDone = tab === 3 ? 100 : 0 // %

            window.scrollTo(0, 0)

            if (isButton && this.isPenultimateTab) {
                this.tab.available[this.tab.available.length - 1] = 1
                this.tab.complete[this.tab.complete.length - 1] = 1
                this.sendContent()
            }
        },
        moveElement() {
            const target = document.querySelector('#radio_and_select__radio .formkit-option:last-child .formkit-wrapper')
            const select = document.querySelector('#radio_and_select__select')

            if (! target) return

            target.innerHTML = ''
            target.append(select)
        },

        /** SCROLL */
        getCoords(elem) { // crossbrowser version
            const box = elem.getBoundingClientRect()

            const body = document.body
            const docEl = document.documentElement

            const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
            const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

            const clientTop = docEl.clientTop || body.clientTop || 0
            const clientLeft = docEl.clientLeft || body.clientLeft || 0

            const top  = box.top +  scrollTop - clientTop
            const left = box.left + scrollLeft - clientLeft

            return { top: Math.round(top), left: Math.round(left), height: box.height }
        },
        /*
           @param pos: the y-position to scroll to (in pixels)
           @param time: the exact amount of time the scrolling will take (in milliseconds)
        */
        scrollToSmoothly(pos, time) {
            let currentPos = window.pageYOffset
            let start = null
            if(time == null) time = 1000
            pos = +pos; time = +time
            window.requestAnimationFrame(function step(currentTime) {
                start = !start ? currentTime : start;
                let progress = currentTime - start;
                if (currentPos < pos) {
                    window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
                } else {
                    window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
                }
                if (progress < time) {
                    window.requestAnimationFrame(step);
                } else {
                    window.scrollTo(0, pos);
                }
            })
        },
        scrollController(id) {
            // return null

            const htmlElem = this.$refs['qs' + id][0]
            const elemCoord = this.getCoords(htmlElem)

            let offsetY = this.isTabs ? -80 : -40

            if (['radio', 'radio_star', 'select', 'radio_select'].includes(this.questions[id].type)) {
                offsetY = elemCoord.height - (this.isTabs ? 20 : -20)
            }

            this.scrollToSmoothly(elemCoord.top + offsetY)
        },

        /** Cookies */
        setCookie(name, value, minutes) {
            let expires = ''
            if (minutes) {
                const date = new Date()
                date.setTime(date.getTime() + (minutes * 60 * 1000))
                expires = '; expires=' + date.toUTCString()
            }
            document.cookie = name + '=' + (value || '')  + expires + '; path=/'
        },
        getCookies(){
            let pairs = document.cookie.split(';')
            let cookies = {}
            for (let i=0; i < pairs.length; i++){
                let pair = pairs[i].split('=')
                cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='))
            }
            return cookies
        },

        /** Send Content */
        sendContent() {
            const self = this
            const cookies = this.getCookies('isSendMail')

            if (cookies.isSendMail === 'send') {
                console.log('No send. Timeout 3 min')
                // return
            }

            // Create Html Content for PDF File
            let content = '<div>'
            content += `<h1>${this.userName.full_name} ${this.userName.last_name}</h1>`
            content += `<br>`
            content += `<span>${this.form}</span>`
            content += `<br>`
            this.questions.forEach(qsn => {
                const title = this.form === 'car' ? qsn.title.replace('%%car_makes%%', 'this.carMakes') : qsn.title
                let value = ''
                switch (qsn.type) {
                    case 'select_auto':
                        value = `${qsn.value.auto_year}, ${qsn.value.auto_make}, ${qsn.value.auto_model}`
                        break
                    case 'date':
                        value = `${qsn.value.dd}-${qsn.value.mm}-${qsn.value.yyyy}`
                        break
                    case 'user_name':
                        value = `${qsn.value.full_name} ${qsn.value.last_name}`
                        break
                    case 'address':
                        value = `${qsn.value.address}, ${qsn.value.apt}, ${qsn.value.state}, ${qsn.value.unit}, ${qsn.value.zip}`
                        break
                    case 'address_v2':
                        value = `${qsn.value.address}, ${qsn.value.city}, ${qsn.value.state}, ${qsn.value.unit}, ${qsn.value.zip}`
                        break
                    case 'size_two':
                        value = `ft: ${qsn.value.ft}, in: ${qsn.value.in}`
                        break
                    default: value = qsn.value
                }
                content += `<div><h4>${title}</h4><p>${value}</p></div>`
            })
            content += '</div>'

            console.log(content)

            jQuery.ajax({
                url: sfi_params.adminUri,
                type: 'post',
                data: {
                    action: 'form_insurance_ajax',
                    nonce: sfi_params.nonce,
                    data: {
                        id: this.form,
                        user_name: this.userName,
                        car_make: this.autoMake ? `${this.autoMake.auto_make} ${this.autoMake.auto_model}` : '',
                        content: content,
                    },
                },
                success: function (data) {
                    self.setCookie('isSendMail', 'send', 3)
                    console.log('success!')
                },
                error: function (error) {
                    console.log(error.message)
                },
            })
        },
    },
    mounted() {
        this.setStatusCompleteQuestions()
        this.managerTabs()
        this.moveElement()
        window.scrollTo(0, 0)
        this.isSecondVehicle = this.questions.find(q => q.key === 'add_second_vehicle')?.value === 'Yes'
        this.isSecondDriver  = this.questions.find(q => q.key === 'add_second_driver')?.value === 'Yes'

        // Показати / приховати при умові активності парента
        this.questions.forEach(qp => {
            if (qp.key) {
                const key = qp.key
                const value = typeof qp.value === 'string' ? qp.value?.toLowerCase() : null

                if (['yes', 'no'].includes(value)) {
                    this.questions.forEach(qc => {
                        if (qc.parent === key) {
                            qc.active = 'yes' === value ? 1 : 0
                        }
                    })
                }
            }
        })
    },
    watch: {
        questions: {
            deep: true,
            handler(val, oldVal) {
                this.setStatusCompleteQuestions()
                this.managerTabs()
                this.managerShowQuestions()
            }
        }
    },
}
</script>