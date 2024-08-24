
import { ref, onMounted } from 'vue';

const friends = ref([]);

onMounted(async () => {
  const response = await fetch('/links.json');
  friends.value = await response.json();
});


