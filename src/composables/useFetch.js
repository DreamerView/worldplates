import { reactive, toRefs } from "vue";

export function useFetch(url) {
  const state = reactive({
    data: null,
    error: false,
    errorText: "",
    loading: false,
  });

  const execute = async () => {
    try {
      state.error = false;
      state.errorText = "";
      state.loading = true;

      const req = await fetch(url);

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
    ...toRefs(state), // <-- KEEP REACTIVITY
    execute,
  };
}
