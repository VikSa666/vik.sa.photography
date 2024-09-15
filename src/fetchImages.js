import { supabase } from "./supabase/supabaseClient";
// Function to fetch images from the folder
const fetchImages = async (folderName) => {
    const { data, error } = await supabase.storage
        .from("photography")
        .list(folderName);
    if (error) {
        console.error("Error fetching files:", error.message);
    }
    else {
        if (data && data.length > 0) {
            return data.map((file) => {
                // console.log(file);
                const publicUrl = supabase.storage
                    .from("photography")
                    .getPublicUrl(`${folderName}/${file.name}`).data.publicUrl;
                // console.log("Public URL:", publicUrl); // Log the URLs
                return publicUrl;
            });
        }
        else {
            console.log("No files found in the folder.");
        }
    }
};
export { fetchImages };
