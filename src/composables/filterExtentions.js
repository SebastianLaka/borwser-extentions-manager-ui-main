import { onMounted, ref } from 'vue'
import jsonData from '../assets/data.json'
const dataJSON = ref([])
const filteredDataJSON = ref([])

const initData = () => {
  // dajesz warunek, że jeśli nie ma 'extensions' w localStorage, to ma je stworzyć
  if (!localStorage.getItem('extensions')) {
    // JSON.stringify(gdy dajesz do API), JSON.parse(gdy bierzesz do projektu, jako "obiekt", na którym chcesz pracować, bo bez parse dane by wyglądały np. tak: "id:1","name:coś tam")
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
  // pobierasz sobie na nowo localStorage
  const localStorageData = JSON.parse(localStorage.getItem('extensions')) || []

  // szukasz indexu elementu z localStorage, ktorego name === name itemu, ktory klikasz
  const index = localStorageData.findIndex((extension) => extension.name === item.name)

  // tu sprawdzasz, czy index !== -1, czyli czy on ISTNIEJE (dzięki temu -1 właśnie, bo inaczej da false)
  if (index !== -1) {
    // usuwasz to z tablicy, ten poszczególny index, który znalazłeś
    localStorageData.splice(index, 1)

    // ustawiasz nowy "stan" w localStorage z wprowadzonymi zmianami
    localStorage.setItem('extensions', JSON.stringify(localStorageData))

    // filtrujesz tą tablicę, żeby dało Ci extensiony, ale już bez tej usuniętej, (extension name jest różny od tego item.name, który usunęliśmy, dlatego aktualizuje nam to UI)
    filteredDataJSON.value = filteredDataJSON.value.filter(
      (extension) => extension.name !== item.name,
    )
  }
}

const handleActive = (item) => {
  // pobieramy dane z localStorage
  const localStorageData = JSON.parse(localStorage.getItem('extensions')) || []

  // mapujemy sobie extension z localStorage i sprawdzamy
  const updatedItems = localStorageData.map((extension) => {
    // jeśli extenstion.name === item.name to niech nam zwróci wszystko tak samo w tym extension, ale niech zmieni status isActive
    if (extension.name === item.name) {
      return { ...extension, isActive: !extension.isActive }
    }
    // jeśli extension.name !== item.name to niech zwróci tak jak w pierwotnej wersji
    return extension
  })

  // ustawiamy na nowo "stan" ze zmianami
  localStorage.setItem('extensions', JSON.stringify(updatedItems))

  // możesz to niżej odkomentować, tylko wtedy będzie po odznaczeniu/zaznaczeniu isActive wrzucało Cię na zakładkę "all", ale zmiana będzie natychmiastowo, a nie dopiero po przejściu na inną zakładkę, aby podejrzeć

  // loadData()
}

export default function useExtentions() {
  // onMounted, żeby od razu na render dodało i załadowało localStorage
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
