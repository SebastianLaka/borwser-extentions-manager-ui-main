import { ref, onMounted } from 'vue'
import jsonData from '../assets/data.json'
const dataJSON = ref([])
const filteredDataJSON = ref([])

const initData = (data) => {
  if (!localStorage.getItem('extensions')) {
    localStorage.setItem('extensions', JSON.stringify(jsonData))
  } else if (!data) {
    localStorage.setItem('extensions', JSON.stringify(jsonData))
  }
}

const loadData = () => {
  const localStorageData = JSON.parse(localStorage.getItem('extensions')) || []
  dataJSON.value = localStorageData
  filteredDataJSON.value = [...localStorageData]
}

const getActive = () => {
  loadData()
  filteredDataJSON.value = dataJSON.value.filter((item) => item.isActive)
}

const getInactive = () => {
  loadData()
  filteredDataJSON.value = dataJSON.value.filter((item) => !item.isActive)
}

const getAll = () => {
  loadData()
  filteredDataJSON.value = [...dataJSON.value]
}

const removeExtention = (item) => {
  const localStorageData = JSON.parse(localStorage.getItem('extensions')) || []
  const index = localStorageData.findIndex((extension) => extension.name === item.name)
  if (index !== -1) {
    localStorageData.splice(index, 1)
    localStorage.setItem('extensions', JSON.stringify(localStorageData))
    filteredDataJSON.value = filteredDataJSON.value.filter(
      (extension) => extension.name !== item.name,
    )
  }
}

const handleActive = (item) => {
  const localStorageData = JSON.parse(localStorage.getItem('extensions')) || []
  const updatedItems = localStorageData.map((extension) => {
    if (extension.name === item.name) {
      return { ...extension, isActive: !extension.isActive }
    }
    return extension
  })

  localStorage.setItem('extensions', JSON.stringify(updatedItems))
  loadData()
}

export default function useExtentions() {
  onMounted(() => {
    initData()
    loadData()
  })

  return {
    dataJSON,
    getActive,
    getInactive,
    getAll,
    filteredDataJSON,
    removeExtention,
    handleActive,
  }
}
