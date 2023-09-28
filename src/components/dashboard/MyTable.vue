<template>
    <table class="table-auto w-full bg-white">
        <thead class="bg-[#fafafa] text-[15px]">
            <tr>
                <th class="p-2 text-left">ID</th>
                <th class="p-2 text-left">User</th>
                <th class="p-2 text-left">Date of Birth</th>
                <th class="p-2 text-left">Email</th>
                <th class="p-2 text-left">Job</th>
                <th class="p-2 text-left">Country</th>
                <th class="p-2 text-left">Actions</th>
            </tr>
        </thead>
        <tbody class="text-[#303030] text-[15px]">
            <tr v-for="(user,key) in dataObj.users" :key="key" class=" hover:bg-[#f4f4f4]" :class="checkUser(user.id)? 'bg-[#ccc]':''">
                <td class="p-2">{{ user.id }}</td>
                <td class="p-2">
                    <div class="flex items-center">
                        <img class="w-[25px] h-[25px] rounded-full" :src="user.profile_picture">
                        <div class="ml-3">{{ user.first_name }} {{ user.last_name }}</div>
                    </div>
                </td>
                <td class="p-2">{{ user.date_of_birth }}</td>
                <td class="p-2 text-[14px] font-bold text-black">{{ user.email }}</td>
                <td class="p-2">{{ user.job }}</td>
                <td class="p-2">{{ user.country }}</td>
                <td class="p-2">
                    <div class="flex">
                        <button class="border-2 outline-0 border-[#ccc] bg-white py-1 px-2 hover:bg-[#ccc] mr-2" @click="toggleUser(user.id)">{{ checkUser(user.id)? 'Remove':'Select' }}</button>
                        <button class="border-2 outline-0 border-[#ccc] bg-white py-1 px-2 hover:bg-[#ccc]" @click="detailClick(user)">View Detail</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { ref } from 'vue';
export default {
    props: {
        dataObj: {
            type:Object,
            default() {
                return {}
            }
        }
    },
    setup({}, ctx) {
        const selectedUser = ref([]);
        const detailClick = (obj) => {
            ctx.emit('onFocus', obj)
        }

        const toggleUser = (id) => {
            if (selectedUser.value.includes(id)) {
                const idx = selectedUser.value.indexOf(id);
                selectedUser.value.splice(idx,1);
            } else {
                selectedUser.value.push(id);
            }
        }

        const checkUser = (id) => {
            return selectedUser.value.includes(id)
        }

        return {
            selectedUser,

            detailClick,
            toggleUser,
            checkUser
        }
    }
}
</script>