import { create } from 'zustand';

const useWeatherStore = create((set) => ({
    city: '',
    code: '',
    data: {},
    loading: false,
    error: null,
    setData: (newData) => set({ data: newData }),
    setCity: (newCity) => set({ city: newCity }),
    setCode: (newCode) => set({ code: newCode }),
    setLoading: (newLoading) => set({ loading: newLoading }),
    setError: (newError) => set({ error: newError }),
}));

const useProductStore = create((set) => ({
    data: [], // Initialize as an empty array
    setData: (newData) => set({ data: newData }),
}));




export default useWeatherStore;
