import commonApi from "./CommonApi";
import Server_url from "./server_url";

//Api call for upload video
export const addVideoAPI=async(videoDetails)=>{
    return await commonApi("POST",`${Server_url}/allVideos`,videoDetails)
}

//Api call for get videos
export const getVideoAPI=async()=>{
    return await commonApi("GET",`${Server_url}/allVideos` ,"")
}
//API call for delete video card
export const deleteVideoAPI=async(videoID)=>{
    return await commonApi("DELETE",`${Server_url}/allVideos/${videoID}`,"")
}

//API call for save watch history
export const saveHistoryAPI=async(historyDetails)=>{
    return await commonApi("POST",`${Server_url}/history`,historyDetails)
}

//API call for get watch history
export const getHistoryAPI=async()=>{
    return await commonApi("GET",`${Server_url}/history` ,"")
}

//APi call for delete history
export const deleteHistoryAPI=async(videoID)=>{
    return await commonApi("DELETE",`${Server_url}/history/${videoID}`,"")
}

//Api call for add category
export const addCategoryAPI=async(categoryDetails)=>{
    return await commonApi("POST",`${Server_url}/allcategory`,categoryDetails)
}

//Api call for get gategory
export const getCategoryAPI=async()=>{
    return await commonApi("GET",`${Server_url}/allcategory` ,"")
}

//Api call foe delete category
export const deleteCategoryAPI=async(catID)=>{
    return await commonApi("DELETE",`${Server_url}/allcategory/${catID}`,"")
}

//API call for get single video
export const getSingleVideoAPI=async(videoId)=>{
    return await commonApi("GET",`${Server_url}/allVideos/${videoId}` ,"")
}

//API call for update category
export const updateCategoryAPI=async(catID,categoryDetails)=>{
    return await commonApi("PUT",`${Server_url}/allcategory/${catID}`,categoryDetails)
}