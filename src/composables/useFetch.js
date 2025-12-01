import { reactive, toRefs, ref } from "vue";

export function useFetch(initialUrl) {
  const url = ref(initialUrl);

  const state = reactive({
    data: null,
    error: false,
    errorText: "",
    loading: false,
  });

  const execute = async (newUrl) => {
    try {
      if (newUrl) url.value = newUrl;

      state.error = false;
      state.errorText = "";
      state.loading = true;

      const req = await fetch(url.value);

      if (!req.ok) {
        throw new Error("The server is unavailable. Please try again later.");
      }

      const res = await req.json();
      state.data = res;

    } catch (error) {
      state.error = true;
      state.errorText = error.message || "Something went wrong.";
      console.error(error);

    } finally {
      state.loading = false;
    }
  };

  return {
    ...toRefs(state),
    execute,
  };
}
