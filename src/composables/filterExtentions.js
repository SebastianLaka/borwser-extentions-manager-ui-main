import { ref } from 'vue';
import jsonData from '../assets/data.json'
const dataJSON = ref(jsonData);
const filteredDataJSON = ref(jsonData);

const getActive = () => {
  filteredDataJSON.value = dataJSON.value.filter(item => item.isActive);
};
const getInactive = () => {
  filteredDataJSON.value = dataJSON.value.filter(item => !item.isActive);
};
const getAll = () => {
  filteredDataJSON.value = [...dataJSON.value];
};

export default function useExtentions() {
  return {
    dataJSON,
    getActive,
    getInactive,
    getAll,
    filteredDataJSON,
  }
}

