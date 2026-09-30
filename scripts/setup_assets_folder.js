import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '..', 'public', 'assets');
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const fileMap = [
  {
    fileName: 'fotoprofil.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'foto in game.jpg',
    url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1000&q=80'
  },
  {
    fileName: 'fotomenggunakanmedali.jpg',
    url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'fotobeberapamedali.jpg',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'fotopaddlekamito.png',
    url: 'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'sertifjuara1kadispora.jpeg',
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'juara2jakartapickleballchampionship.jpeg',
    url: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'juara2mensdoubleitb.jpg',
    url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'juara2mensdoublekadispora.jpg',
    url: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'juara2menssingleunj.jpg',
    url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'juara3jabodetabek.jpeg',
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'juara3mensdoubleUI.jpg',
    url: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'my instagram.png',
    url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'mytiktok.png',
    url: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80'
  },
  {
    fileName: 'videosatu.mp4',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  }
];

function downloadFile(item) {
  return new Promise((resolve) => {
    const destInAssets = path.join(assetsDir, item.fileName);
    const destInPublic = path.join(publicDir, item.fileName);
    
    const file = fs.createWriteStream(destInAssets);
    
    const request = https.get(item.url, (response) => {
      // Handle redirect
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (redirectRes) => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close(() => {
              try {
                fs.copyFileSync(destInAssets, destInPublic);
              } catch (e) {}
              console.log(`Saved: public/assets/${item.fileName}`);
              resolve(true);
            });
          });
        }).on('error', () => {
          resolve(false);
        });
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            try {
              fs.copyFileSync(destInAssets, destInPublic);
            } catch (e) {}
            console.log(`Saved: public/assets/${item.fileName}`);
            resolve(true);
          });
        });
      } else {
        console.warn(`Non-200 code ${response.statusCode} for ${item.fileName}`);
        resolve(false);
      }
    });

    request.on('error', (err) => {
      console.warn(`Could not download ${item.fileName}:`, err.message);
      resolve(false);
    });

    request.setTimeout(12000, () => {
      request.destroy();
      resolve(false);
    });
  });
}

async function run() {
  console.log('Starting assets download into public/assets folder...');
  for (const item of fileMap) {
    await downloadFile(item);
  }
  console.log('All files processed in public/assets folder.');
}

run();
