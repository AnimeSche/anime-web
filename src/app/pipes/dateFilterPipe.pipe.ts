import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {
    transform(episodes: any[], date: Date): any[] {
        return episodes.filter(episode => {
            const episodeDate = new Date(episode.air_date);
            return episodeDate.toDateString() === date.toDateString();
        });
    }
}
