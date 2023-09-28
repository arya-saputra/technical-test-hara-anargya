<template>
    <div>
        <div class="all-cards flex gap-3">
            <MyCard title="Pending" numberUp="2.480" numberComma="30" year="Last month" trend="up" numberPercent="2.15"/>
            <MyCard title="Paid" numberUp="84.310" trend="down" year="Last month" numberComma="00" numberPercent="1.10" />
            <MyCard title="Rejected" numberUp="12.155" trend="up" year="Last month" numberComma="00" numberPercent="2.15" />
        </div>
        <div class="w-full mt-7 border-2 rounded-lg text-black overflow-hidden">
            <div class="border-y-2 p-4 text-[20px] font-bold bg-white">User List</div>
            <MyTable :dataObj="Users" @onFocus="ShowModal" />
        </div>
        <Transition name="bounce">
            <MyModal v-show="ViewModal" :dataObj="UserDetail" @onClose="ViewModal=false"></MyModal>
        </Transition>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue';
import MyCard from '../components/dashboard/MyCard.vue';
import MyTable from '../components/dashboard/MyTable.vue';
import MyModal from '../components/dashboard/MyModal.vue';
import MyApi from '../services/Api.js';

export default {
    name:'dashboardView',
    components: {
        MyCard,
        MyTable,
        MyModal
    },
    setup() {
        let Users = ref([]);
        let UserDetail = ref({});
        let ViewModal = ref(false);
        
        const ShowModal = (obj) => {
            UserDetail.value = obj;
            ViewModal.value = true;
        }

        onMounted(() => {
            MyApi.GetUsers().then((res) => {
                Users.value = res.data;
            })
        })

        return {
            Users,
            UserDetail,
            ViewModal,

            ShowModal
        }
    }
};
</script>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>