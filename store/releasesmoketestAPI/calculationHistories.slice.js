import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_calculationhistory_list = createAsyncThunk(
  "calculationHistories/api_v1_calculationhistory_list",
  async payload => {
    const response = await apiService.api_v1_calculationhistory_list(payload)
    return response.data
  }
)
export const api_v1_calculationhistory_create = createAsyncThunk(
  "calculationHistories/api_v1_calculationhistory_create",
  async payload => {
    const response = await apiService.api_v1_calculationhistory_create(payload)
    return response.data
  }
)
export const api_v1_calculationhistory_retrieve = createAsyncThunk(
  "calculationHistories/api_v1_calculationhistory_retrieve",
  async payload => {
    const response = await apiService.api_v1_calculationhistory_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_calculationhistory_update = createAsyncThunk(
  "calculationHistories/api_v1_calculationhistory_update",
  async payload => {
    const response = await apiService.api_v1_calculationhistory_update(payload)
    return response.data
  }
)
export const api_v1_calculationhistory_partial_update = createAsyncThunk(
  "calculationHistories/api_v1_calculationhistory_partial_update",
  async payload => {
    const response = await apiService.api_v1_calculationhistory_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_calculationhistory_destroy = createAsyncThunk(
  "calculationHistories/api_v1_calculationhistory_destroy",
  async payload => {
    const response = await apiService.api_v1_calculationhistory_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const calculationHistoriesSlice = createSlice({
  name: "calculationHistories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_calculationhistory_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_calculationhistory_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_calculationhistory_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_calculationhistory_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_calculationhistory_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_calculationhistory_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_calculationhistory_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_calculationhistory_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_calculationhistory_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_calculationhistory_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_calculationhistory_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_calculationhistory_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_calculationhistory_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_calculationhistory_partial_update.fulfilled,
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
        api_v1_calculationhistory_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_calculationhistory_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_calculationhistory_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_calculationhistory_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_calculationhistory_list,
  api_v1_calculationhistory_create,
  api_v1_calculationhistory_retrieve,
  api_v1_calculationhistory_update,
  api_v1_calculationhistory_partial_update,
  api_v1_calculationhistory_destroy,
  slice: calculationHistoriesSlice
}
