import { DataGrid } from "@mui/x-data-grid";

const TopFive = () => {
  //Books, movies, songs, sports, foods

  const columns = [
    { field: "books", headerName: "Books", flex: 1 },
    { field: "movies", headerName: "Movies", flex: 1 },
    { field: "sports", headerName: "Sports", flex: 1 },
    { field: "foods", headerName: "Foods", flex: 1 },
    { field: "os", headerName: "Operating Systems", flex: 1 },
  ];

  const rows = [
    {
      id: 1,
      books: "Dune",
      movies: "Prisoners",
      sports: "MMA",
      foods: "Meatballs and mashed potatoes",
      os: "Windows",
    },
    {
      id: 2,
      books: "Ego",
      movies: "Fury",
      sports: "Muay thai",
      foods: "Chicken nuggets",
      os: "Kali Linux",
    },
    {
      id: 3,
      books: "Hitchikers guide to the galaxy",
      movies: "Society of the snow",
      sports: "Boxing",
      foods: "Mom's spaghetti",
      os: "Ubuntu",
    },
    {
      id: 4,
      books: "Gulag Archipelago",
      movies: "All quiet on the western front",
      sports: "E-sports",
      foods: "Mudcake",
      os: "Android",
    },
    {
      id: 5,
      books: "Fahrenheit 451",
      movies: "The Guilty",
      sports: "Soccer",
      foods: "Grapes",
      os: "macOS",
    },
  ];

  return (
    <>
      <p className="text-xl font-bold mt-4 ">Top 5 of 5🎈</p>
      <p className="text-sm text-graytext mb-2">Without any real reasoning</p>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination={false}
        hideFooter={true}
        showColumnVerticalBorder={true}
        disableColumnResize={true}
        sx={{
          boxShadow: 2,
          backgroundColor: "white",
          color: "black",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-row": {
            backgroundColor: "lightgray",
            color: "black",
          },
        }}
      />
    </>
  );
};

export default TopFive;
