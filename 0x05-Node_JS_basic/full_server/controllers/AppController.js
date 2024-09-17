/**
 * Contains the miscellaneous route handlers.
 * @author Thomas Manhica <https://github.com/ManhicaThomas>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
