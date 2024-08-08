import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_operation_list = createAsyncThunk(
  "operations/api_v1_operation_list",
  async payload => {
    const response = await apiService.api_v1_operation_list(payload)
    return response.data
  }
)
export const api_v1_operation_create = createAsyncThunk(
  "operations/api_v1_operation_create",
  async payload => {
    const response = await apiService.api_v1_operation_create(payload)
    return response.data
  }
)
export const api_v1_operation_retrieve = createAsyncThunk(
  "operations/api_v1_operation_retrieve",
  async payload => {
    const response = await apiService.api_v1_operation_retrieve(payload)
    return response.data
  }
)
export const api_v1_operation_update = createAsyncThunk(
  "operations/api_v1_operation_update",
  async payload => {
    const response = await apiService.api_v1_operation_update(payload)
    return response.data
  }
)
export const api_v1_operation_partial_update = createAsyncThunk(
  "operations/api_v1_operation_partial_update",
  async payload => {
    const response = await apiService.api_v1_operation_partial_update(payload)
    return response.data
  }
)
export const api_v1_operation_destroy = createAsyncThunk(
  "operations/api_v1_operation_destroy",
  async payload => {
    const response = await apiService.api_v1_operation_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_operation_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_operation_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_operation_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_operation_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_operation_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_operation_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_operation_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_operation_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_operation_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_operation_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_operation_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_operation_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_operation_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_operation_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_operation_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_operation_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_operation_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_operation_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_operation_list,
  api_v1_operation_create,
  api_v1_operation_retrieve,
  api_v1_operation_update,
  api_v1_operation_partial_update,
  api_v1_operation_destroy,
  slice: operationsSlice
}
