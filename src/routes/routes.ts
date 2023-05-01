import { Router } from 'express';
import CronJob from 'cron';

const routes = Router();
let job: CronJob.CronJob;

routes.get('/', (req, res) => {
  return res.json('Hello world!');
});

routes.get('/startCron', (req, res) => {
  job = new CronJob.CronJob(
    '1 * * * * *',
    function () {
      const date = new Date();
      console.log(
        `[cron-message] Hour: ${
          date.getHours() + 3
        } Minute: ${date.getMinutes()} Seconds: ${date.getSeconds()}`,
      );
    },
    null,
    true,
    'America/Sao_Paulo',
  );

  job.start();
  return res.json('Cron iniciado!');
});

routes.get('/stopCron', (req, res) => {
  job.stop();
  return res.json('Cron Finalizado!');
});

export { routes };
