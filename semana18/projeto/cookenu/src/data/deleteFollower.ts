import connection from "../connection";
export default async function deleteFollower(idFollower: string) {
  await connection.raw(
    `DELETE FROM cookenu_users_followers WHERE id_follower="${idFollower}"`
  );
}
