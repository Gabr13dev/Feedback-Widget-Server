import { prisma } from '../../prisma';
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async create(data: FeedbackCreateData){
        await prisma.feedback.create({
            data:{
                type: data.type,
                comment: data.comment,
                url: data.url,
                screenshootPath: data.resultUploadLocation,
            }
        });
    }
}