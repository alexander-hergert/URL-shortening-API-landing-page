export const readData = () => {
  try {
    const objectJSON = localStorage.getItem("urls");
    if (!objectJSON) {
      localStorage.setItem("urls", "[]");
      return [];
    }
    const data = JSON.parse(objectJSON);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const saveData = (values) => {
  try {
    const data = readData();
    data.push(values);
    const objectJSON = JSON.stringify(data);
    localStorage.setItem("urls", objectJSON);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
