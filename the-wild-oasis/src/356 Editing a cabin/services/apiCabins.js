import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  let { data, error } = await supabase.from('cabin').select('*');
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  const imageath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1. Create/edit cabin
  let query = supabase.from('cabin');

  //A. create
  if (!id) query = query.insert([{ ...newCabin, image: imageath }]);
  //B. edit
  if (id)
    query = query
      .update({ ...newCabin, image: imageath })
      .eq('id', id)
      .select();

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created');
  }
  //2. Upload image
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);
  //3. Delete the cabin if there was an error upoading the image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Cabin image could not be uploaded and Cabins could not be created'
    );
  } else {
    // Handle success
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabin').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }
  return data;
}
