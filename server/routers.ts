import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    send: publicProcedure
      .input(
        z.object({
          nome: z.string().min(1),
          email: z.string().email(),
          mensagem: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        // Enviar notificação ao proprietário
        await notifyOwner({
          title: `[PORTAL DOUG - CONTATO] ${input.nome} / ${input.email}`,
          content: `Nome: ${input.nome}\nE-mail: ${input.email}\n\nMensagem:\n${input.mensagem}`,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
