## 项目地址

**[基于Anchor的AMM做市商系统](https://github.com/congmucc/anchor-spl-amm)**

## 项目介绍
> 该项目是基于Anchor框架实现了一个简易版的AMM市商系统，完成了基本的Swap，目前正在迭代。
> 技术栈: Anchor + SPL Token
> 项目职责：
> - 基于 Anchor 框架设计并开发 AMM 系统核心模块，包括流动性池创建、代币交换和流动性管理。
> - 实现池中资产比例自动调整机制，优化交易滑点和收益分配。
> - 开发基于 SPL Token 的代币交换逻辑，支持精准代币兑换。
> - 编写全面的单元测试和集成测试，覆盖流动性管理、代币交换及边界条件。

## CORE
 

- `deposit_liquidity.rs`
  **Deposit formula**
  ```rust
   let ratio = I64F64::from_num(pool_a.amount)
        .checked_mul(I64F64::from_num(pool_b.amount))
        .unwrap();
    if pool_a.amount > pool_b.amount {
        (
            I64F64::from_num(amount_b)
                .checked_mul(ratio)
                .unwrap()
                .to_num::<u64>(),
            amount_b,
        )
    } 
  ```
  > `ratio = pool_a.amount * pool_b.amount`
  > `adjusted_amount_b = amount_a / ratio`


  **Liquidity injection formula**
    ```rust
    let mut liquidity = I64F64::from_num(amount_a)
        .checked_mul(I64F64::from_num(amount_b))
        .unwrap()
        .sqrt()
        .to_num::<u64>();
    ```
    > `liquidity = sqrt(amount_a * amount_b)`

  **Lock some minimum liquidity**
  ```rust
      if pool_creation {
        if liquidity < MINIMUM_LIQUIDITY {
            return err!(TutorialError::DepositTooSmall);
        }

        liquidity -= MINIMUM_LIQUIDITY;
    }
  ```
  > Lock some minimum liquidity on the first deposit


- `swap_exact_tokens_for_tokens.rs`
  **Swap formula**
  ```rust
    I64F64::from_num(taxed_input)
        .checked_mul(I64F64::from_num(pool_b.amount))
        .unwrap()
        .checked_div(
            I64F64::from_num(pool_a.amount)
            .checked_add(I64F64::from_num(taxed_input))
            .unwrap(),
        )
        .unwrap()
  ```

  > `output = (pool_a.amount + taxed_input) / taxed_input * pool_b.amount`
  > This is essentially `x * y = k` x is pool_a.amount, y is pool_b.amount

  **Slip point protection**
  ```rust
  if output < min_output_amount {
        return err!(TutorialError::OutputTooSmall);
    }
  ```
  > `output < min_output_amount` value is as a parameter

  **Invariant**
  ```rust
  if invariant > ctx.accounts.pool_account_a.amount * ctx.accounts.pool_account_a.amount {
        return err!(TutorialError::InvariantViolated);
    }
  ```
  > `invariant > pool_a.amount * pool_a.amount` Just need to be greater than.