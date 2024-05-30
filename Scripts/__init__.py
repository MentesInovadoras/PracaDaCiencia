import dotenv
import os


dotenv.load_dotenv()
EMAIL: str = os.getenv('EMAIL')
EMAIL_PASSWORD: str = os.getenv('EMAIL_PASSWORD')