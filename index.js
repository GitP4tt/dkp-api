import server from "./config/server";
import "./config/database";

const PORT = process.env.PORT || 3000;


server.listen(PORT, () => {
    console.log(`app running on ${PORT}`);
});
