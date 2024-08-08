import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_userpreference_list = createAsyncThunk(
  "userPreferences/api_v1_userpreference_list",
  async payload => {
    const response = await apiService.api_v1_userpreference_list(payload)
    return response.data
  }
)
export const api_v1_userpreference_create = createAsyncThunk(
  "userPreferences/api_v1_userpreference_create",
  async payload => {
    const response = await apiService.api_v1_userpreference_create(payload)
    return response.data
  }
)
export const api_v1_userpreference_retrieve = createAsyncThunk(
  "userPreferences/api_v1_userpreference_retrieve",
  async payload => {
    const response = await apiService.api_v1_userpreference_retrieve(payload)
    return response.data
  }
)
export const api_v1_userpreference_update = createAsyncThunk(
  "userPreferences/api_v1_userpreference_update",
  async payload => {
    const response = await apiService.api_v1_userpreference_update(payload)
    return response.data
  }
)
export const api_v1_userpreference_partial_update = createAsyncThunk(
  "userPreferences/api_v1_userpreference_partial_update",
  async payload => {
    const response = await apiService.api_v1_userpreference_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_userpreference_destroy = createAsyncThunk(
  "userPreferences/api_v1_userpreference_destroy",
  async payload => {
    const response = await apiService.api_v1_userpreference_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_userpreference_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userpreference_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userpreference_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userpreference_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userpreference_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userpreference_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userpreference_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userpreference_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userpreference_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userpreference_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userpreference_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userpreference_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_userpreference_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_userpreference_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_userpreference_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_userpreference_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userpreference_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userpreference_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_userpreference_list,
  api_v1_userpreference_create,
  api_v1_userpreference_retrieve,
  api_v1_userpreference_update,
  api_v1_userpreference_partial_update,
  api_v1_userpreference_destroy,
  slice: userPreferencesSlice
}
